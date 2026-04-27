'use client';

import {
  createContext,
  forwardRef,
  useCallback,
  useContext,
  useEffect,
  useImperativeHandle,
  useMemo,
  useRef,
  useState,
} from 'react';
import styles from './ChatWidget.module.css';

const CHAT_API = 'https://mane-chat-production.up.railway.app';

type ChatMessage = { id: number; type: 'bot' | 'user'; html: string };
type ChatHistory = { role: 'assistant' | 'user'; content: string };

type ChatContextValue = {
  open: () => void;
  toggle: () => void;
  isOpen: boolean;
};

const ChatContext = createContext<ChatContextValue | null>(null);

export function useChat() {
  const ctx = useContext(ChatContext);
  if (!ctx) throw new Error('useChat must be used inside <ChatProvider>');
  return ctx;
}

type Props = {
  origem: string;
  themeTeal?: string;
  themeCoral?: string;
  children: React.ReactNode;
};

export function ChatProvider({
  origem,
  themeTeal = '#034B46',
  themeCoral = '#E34B4B',
  children,
}: Props) {
  const [isOpen, setOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [typing, setTyping] = useState(false);
  const [input, setInput] = useState('');
  const [responding, setResponding] = useState(false);

  const started = useRef(false);
  const history = useRef<ChatHistory[]>([]);
  const messagesRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const nextId = useRef(1);

  const scroll = useCallback(() => {
    setTimeout(() => {
      const el = messagesRef.current;
      if (el) el.scrollTop = el.scrollHeight;
    }, 50);
  }, []);

  const addMsg = useCallback(
    (html: string, type: 'bot' | 'user') => {
      setMessages((prev) => [...prev, { id: nextId.current++, type, html: html.replace(/\n/g, '<br>') }]);
      scroll();
    },
    [scroll]
  );

  const splitIntoChunks = useCallback((text: string) => {
    let chunks = text.split(/\n\n+/).filter((c) => c.trim());
    if (chunks.length <= 1) {
      const sentences = text.split(/(?<=[.!?])\s+/);
      chunks = [];
      let current = '';
      for (const s of sentences) {
        if (current && (current + ' ' + s).length > 120) {
          chunks.push(current);
          current = s;
        } else {
          current = current ? current + ' ' + s : s;
        }
      }
      if (current) chunks.push(current);
    }
    return chunks.length ? chunks : [text];
  }, []);

  const botReply = useCallback(
    (msgs: string[], onDone?: () => void) => {
      let delay = 400;
      msgs.forEach((msg, i) => {
        setTimeout(() => {
          setTyping(true);
          scroll();
        }, delay);
        const dur = Math.max(1200, Math.min(msg.replace(/<[^>]*>/g, '').length * 40, 3000));
        delay += dur;
        setTimeout(() => {
          setTyping(false);
          addMsg(msg, 'bot');
          if (i === msgs.length - 1) {
            setResponding(false);
            inputRef.current?.focus();
            onDone?.();
          }
        }, delay);
        delay += 600 + Math.random() * 400;
      });
    },
    [addMsg, scroll]
  );

  const sendMessage = useCallback(async () => {
    const text = input.trim();
    if (!text || responding) return;
    setResponding(true);
    addMsg(text, 'user');
    setInput('');
    history.current.push({ role: 'user', content: text });
    setTyping(true);
    scroll();

    try {
      const res = await fetch(`${CHAT_API}/chat`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: text,
          history: history.current.slice(-20),
          origem,
        }),
      });
      setTyping(false);
      if (!res.ok) {
        addMsg('Desculpa, tive um probleminha aqui. Pode repetir?', 'bot');
        setResponding(false);
        return;
      }
      const data: { reply: string; reserva?: { success?: boolean; code?: string } } = await res.json();
      history.current.push({ role: 'assistant', content: data.reply });
      botReply(splitIntoChunks(data.reply), () => {
        if (data.reserva?.success && data.reserva.code) {
          const link = `https://reservas.mane.com.vc/consultar?code=${data.reserva.code}`;
          setTimeout(() => {
            addMsg(
              `🎉 Aqui está o link pra você acompanhar sua reserva:\n<a href="${link}" target="_blank" rel="noopener" style="color:${themeTeal};word-break:break-all;">${link}</a>`,
              'bot'
            );
          }, 800);
        }
      });
    } catch {
      setTyping(false);
      addMsg('Hmm, nao consegui conectar agora. Tenta de novo? 😊', 'bot');
      setResponding(false);
    }
  }, [addMsg, botReply, input, origem, responding, scroll, splitIntoChunks, themeTeal]);

  const toggle = useCallback(() => {
    setOpen((prev) => {
      const next = !prev;
      if (next && !started.current) {
        started.current = true;
        const intro =
          'Oi! Eu sou a Julia, do time de reservas do Mané. Ta pensando em celebrar seu aniversario aqui com a gente? Me conta o que voce precisa!';
        history.current.push({ role: 'assistant', content: intro });
        setTimeout(() => {
          botReply([
            'Oi! Eu sou a Julia, do time de reservas do Mané 😊',
            'Ta pensando em celebrar seu aniversario aqui com a gente? Me conta o que voce precisa!',
          ]);
        }, 100);
      } else if (next) {
        setTimeout(() => inputRef.current?.focus(), 100);
      }
      return next;
    });
  }, [botReply]);

  const open = useCallback(() => {
    if (!isOpen) toggle();
  }, [isOpen, toggle]);

  const value = useMemo<ChatContextValue>(() => ({ open, toggle, isOpen }), [open, toggle, isOpen]);

  useEffect(() => {
    /* Expose CSS vars scoped to chat widget for theming per landing */
  }, []);

  return (
    <ChatContext.Provider value={value}>
      {children}

      <button
        type="button"
        className={`${styles.chatFab} ${isOpen ? styles.fabOpen : ''}`}
        onClick={toggle}
        aria-label={isOpen ? 'Fechar chat' : 'Abrir chat'}
        style={{ ['--teal-chat' as string]: themeTeal, ['--coral-chat' as string]: themeCoral }}
      >
        <span className={styles.chatFabPulse} aria-hidden="true" />
        <span className={styles.chatBadge}>1</span>
        {isOpen ? (
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        ) : (
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          </svg>
        )}
      </button>

      <div
        className={`${styles.chatWindow} ${isOpen ? styles.chatWindowOpen : ''}`}
        role="dialog"
        aria-label="Chat com Julia"
        style={{ ['--teal-chat' as string]: themeTeal }}
      >
        <div className={styles.chatHeader}>
          <div className={styles.chatAvatar}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=80&h=80&fit=crop&crop=face"
              alt="Julia"
            />
          </div>
          <div className={styles.chatHeaderInfo}>
            <h4>Julia — Mané Mercado</h4>
            <span>Online agora</span>
          </div>
        </div>
        <div className={styles.chatMessages} ref={messagesRef}>
          {messages.map((m) => (
            <div
              key={m.id}
              className={`${styles.chatMsg} ${m.type === 'bot' ? styles.chatMsgBot : styles.chatMsgUser}`}
              dangerouslySetInnerHTML={{ __html: m.html }}
            />
          ))}
          <div className={`${styles.chatTyping} ${typing ? styles.chatTypingShow : ''}`}>
            <span className={styles.chatTypingDot} />
            <span className={styles.chatTypingDot} />
            <span className={styles.chatTypingDot} />
          </div>
        </div>
        <div className={styles.chatInputBar}>
          <input
            ref={inputRef}
            type="text"
            className={styles.chatInput}
            placeholder="Digite sua mensagem..."
            autoComplete="off"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                void sendMessage();
              }
            }}
          />
          <button
            type="button"
            className={styles.chatSend}
            onClick={() => void sendMessage()}
            disabled={responding || !input.trim()}
            aria-label="Enviar"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <line x1="22" y1="2" x2="11" y2="13" />
              <polygon points="22 2 15 22 11 13 2 9 22 2" />
            </svg>
          </button>
        </div>
      </div>
    </ChatContext.Provider>
  );
}

/* Button hook component for landing CTAs */
export const ChatOpener = forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement> & { as?: 'button' | 'a' }
>(function ChatOpener({ as = 'button', children, className, ...rest }, ref) {
  const { open } = useChat();
  return (
    <button
      ref={ref}
      type="button"
      className={className}
      onClick={(e) => {
        rest.onClick?.(e);
        open();
      }}
      {...(as === 'a' ? { 'data-href': '#' } : {})}
    >
      {children}
    </button>
  );
});
