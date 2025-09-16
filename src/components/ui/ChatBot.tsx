'use client';

import { useState, useRef, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Button } from './Button';

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
  isTyping?: boolean;
}

interface ChatBotProps {
  className?: string;
  onClose?: () => void;
  isOpen?: boolean;
}

const INITIAL_MESSAGE: Message = {
  id: '1',
  role: 'assistant',
  content: "👋 Hi! I'm your AI consultant. I can help you with AI strategy, implementation planning, ROI calculations, and technical questions. How can I assist your AI transformation today?",
  timestamp: new Date(),
};

const QUICK_RESPONSES = [
  "Calculate ROI for AI implementation",
  "AI readiness assessment",
  "Schedule a strategy session",
  "Explore our case studies",
  "Technical implementation questions"
];

export function ChatBot({ className, onClose, isOpen = false }: ChatBotProps) {
  const [messages, setMessages] = useState<Message[]>([INITIAL_MESSAGE]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && !isMinimized && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen, isMinimized]);

  const generateResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();

    if (lowerMessage.includes('roi') || lowerMessage.includes('return')) {
      return "🚀 **ROI ANALYSIS - ENTERPRISE AI**\n\nBased on our 500+ successful implementations:\n\n💰 **Average ROI: 340%** within 18 months\n\n🎯 **Typical Benefits:**\n• 35-70% operational cost reduction\n• 50-85% process automation  \n• 2-4x faster decision making\n• 15-30% revenue increase\n\n⚡ Ready for a **custom ROI projection** for your use case?";
    }

    if (lowerMessage.includes('readiness') || lowerMessage.includes('assessment')) {
      return "🎯 **AI READINESS ASSESSMENT**\n\nOur comprehensive evaluation covers 12 key dimensions:\n\n🔍 **Technical Infrastructure**\n📊 **Data Quality & Governance**  \n👥 **Team Capabilities**\n💼 **Change Management**\n🔒 **Security & Compliance**\n📈 **Business Process Maturity**\n\n⏱️ **Duration:** 15 minutes\n📋 **Output:** Detailed roadmap + priority matrix\n\n🚀 Ready to **start your assessment** now?";
    }

    if (lowerMessage.includes('schedule') || lowerMessage.includes('meeting')) {
      return "🎯 **STRATEGY SESSION BOOKING**\n\n📅 **Available Consultation Types:**\n\n⚡ **30-min AI Strategy Overview**\n   • Quick wins identification\n   • High-level roadmap\n\n🔥 **60-min Deep-dive Consultation**\n   • Detailed use case analysis  \n   • Implementation planning\n\n🚀 **90-min Technical Architecture Review**\n   • Full technical assessment\n   • Resource & budget planning\n\nWhich option **fits your needs** best?";
    }

    if (lowerMessage.includes('case') || lowerMessage.includes('examples')) {
      return "Here are some of our standout AI transformation successes:\n\n🏭 **Manufacturing:** 70% downtime reduction, $100M annual savings\n🏥 **Healthcare:** 97.8% diagnostic accuracy across 50K+ cases\n🛍️ **Retail:** 35% inventory reduction, $45M cost savings\n🏦 **Financial Services:** 80% faster loan processing\n\nEach case study includes detailed metrics, implementation timeline, and lessons learned. Which industry interests you most?";
    }

    if (lowerMessage.includes('technical') || lowerMessage.includes('implementation')) {
      return "Our technical implementation follows a proven 6-phase methodology:\n\n🔧 **Phase 1:** Infrastructure Assessment\n📊 **Phase 2:** Data Pipeline Setup\n🤖 **Phase 3:** Model Development & Training\n🔄 **Phase 4:** Integration & Testing\n📈 **Phase 5:** Deployment & Monitoring\n🚀 **Phase 6:** Optimization & Scaling\n\nWe support all major platforms: Azure, AWS, GCP, and on-premises deployments. What's your current tech stack?";
    }

    if (lowerMessage.includes('cost') || lowerMessage.includes('price')) {
      return "AI implementation costs vary based on scope and complexity:\n\n💰 **Typical Investment Ranges:**\n• Strategy & Roadmap: $50K - $100K\n• Pilot Implementation: $100K - $500K\n• Full-Scale Deployment: $500K - $2M+\n• Enterprise Transformation: $2M - $10M+\n\n📊 **Cost Factors:**\n• Data complexity and volume\n• Number of use cases\n• Integration requirements\n• Compliance needs\n\nMost clients break even within 12-18 months. Would you like a detailed cost estimate?";
    }

    // Default response
    return "That's a great question! Our AI consultants specialize in:\n\n🎯 **Strategic Planning** - AI roadmaps and use case identification\n🔧 **Technical Implementation** - ML/AI model development and deployment\n📊 **Data & Analytics** - Data architecture and governance\n🤖 **Automation** - Process optimization and RPA integration\n🔒 **AI Governance** - Ethics, compliance, and risk management\n\nCould you tell me more about your specific needs or which area interests you most?";
  };

  const handleSendMessage = async () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: input.trim(),
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);

    // Simulate typing delay
    setTimeout(() => {
      const response = generateResponse(input.trim());
      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: response,
        timestamp: new Date(),
      };

      setMessages(prev => [...prev, assistantMessage]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000);
  };

  const handleQuickResponse = (response: string) => {
    setInput(response);
    setTimeout(() => handleSendMessage(), 100);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  if (!isOpen) return null;

  return (
    <div className={cn(
      'fixed bottom-4 right-4 z-50 transition-all duration-500 transform',
      isMinimized ? 'w-80 h-16' : 'w-[28rem] h-[36rem]',
      className
    )}>
      {/* Professional Chat Window */}
      <div className="bg-white border border-slate-300 rounded-3xl shadow-2xl overflow-hidden transition-all duration-300 hover:shadow-3xl">
        {/* Professional Header */}
        <div className="bg-white border-b-2 border-slate-200 p-5 flex items-center justify-between relative">
          <div className="flex items-center space-x-4">
            <div className="relative">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl flex items-center justify-center shadow-lg">
                <span className="text-2xl">🤖</span>
              </div>
              {/* Professional Status Indicator */}
              <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white" />
            </div>
            <div>
              <h3 className="font-bold text-lg text-slate-800">
                GenAI Assistant
              </h3>
              <p className="text-sm text-slate-600 font-medium">
                {isTyping ? (
                  <span className="text-blue-600">⚡ Analyzing your query...</span>
                ) : (
                  <span className="text-green-600">🟢 Online • Ready to help</span>
                )}
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <Button
              size="sm"
              variant="ghost"
              onClick={() => setIsMinimized(!isMinimized)}
              className="p-2 h-9 w-9 text-slate-600 hover:text-slate-800 hover:bg-slate-100 rounded-xl transition-colors"
            >
              <span className="text-sm font-bold">{isMinimized ? '▲' : '▼'}</span>
            </Button>
            <Button
              size="sm"
              variant="ghost"
              onClick={onClose}
              className="p-2 h-9 w-9 text-slate-500 hover:text-red-600 hover:bg-red-50 rounded-xl transition-colors"
            >
              <span className="text-sm font-bold">✕</span>
            </Button>
          </div>
        </div>

        {!isMinimized && (
          <>
            {/* Professional Messages Area with High Contrast */}
            <div className="h-72 overflow-y-auto p-6 space-y-5 bg-gradient-to-b from-slate-50 via-white to-slate-50 relative border-t border-slate-200">
              {/* Subtle Background Pattern */}
              <div className="absolute inset-0 opacity-[0.02]">
                <div className="absolute inset-0" style={{
                  backgroundImage: 'radial-gradient(circle at 2px 2px, #2563eb 1px, transparent 0)',
                  backgroundSize: '24px 24px'
                }} />
              </div>

              <div className="relative z-10">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={cn(
                      'flex mb-6',
                      message.role === 'user' ? 'justify-end' : 'justify-start'
                    )}
                  >
                    <div className={cn(
                      'flex items-start space-x-3 max-w-[85%]',
                      message.role === 'user' ? 'flex-row-reverse space-x-reverse' : 'flex-row'
                    )}>
                      {/* Avatar */}
                      <div className={cn(
                        'flex-shrink-0 w-8 h-8 rounded-xl flex items-center justify-center text-xs font-bold shadow-sm',
                        message.role === 'user'
                          ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white'
                          : 'bg-gradient-to-r from-slate-800 to-slate-900 text-white'
                      )}>
                        {message.role === 'user' ? 'U' : '🤖'}
                      </div>

                      {/* Message Bubble */}
                      <div
                        className={cn(
                          'rounded-2xl px-4 py-3 text-sm whitespace-pre-wrap animate-fade-in shadow-sm border',
                          message.role === 'user'
                            ? 'bg-blue-600 text-white border-blue-600 font-medium'
                            : 'bg-white text-slate-800 border-slate-200 font-normal'
                        )}
                      >
                        <div className="leading-relaxed">
                          {message.content}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}

                {isTyping && (
                  <div className="flex justify-start mb-6">
                    <div className="flex items-start space-x-3">
                      {/* Bot Avatar */}
                      <div className="flex-shrink-0 w-8 h-8 rounded-xl bg-gradient-to-r from-slate-800 to-slate-900 text-white flex items-center justify-center text-xs font-bold shadow-sm">
                        🤖
                      </div>

                      {/* Typing Indicator */}
                      <div className="bg-white border border-slate-200 rounded-2xl px-4 py-3 shadow-sm">
                        <div className="flex space-x-1 items-center">
                          <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '0s' }} />
                          <div className="w-2 h-2 bg-slate-500 rounded-full animate-bounce" style={{ animationDelay: '0.15s' }} />
                          <div className="w-2 h-2 bg-slate-600 rounded-full animate-bounce" style={{ animationDelay: '0.3s' }} />
                          <span className="text-xs text-slate-500 font-medium ml-2">AI is thinking...</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <div ref={messagesEndRef} />
            </div>

            {/* Professional Quick Responses */}
            {messages.length === 1 && (
              <div className="px-5 pb-4 bg-slate-50 border-t border-slate-200">
                <p className="text-xs text-slate-700 font-semibold mb-3 tracking-wide">⚡ Quick Start Options:</p>
                <div className="flex flex-wrap gap-2">
                  {QUICK_RESPONSES.map((response, index) => (
                    <Button
                      key={index}
                      size="compact"
                      onClick={() => handleQuickResponse(response)}
                      className="text-xs bg-white border border-slate-300 text-slate-700 hover:bg-blue-50 hover:border-blue-300 hover:text-blue-700 shadow-sm transition-all duration-200 rounded-lg px-3 py-2 font-medium"
                    >
                      {response}
                    </Button>
                  ))}
                </div>
              </div>
            )}

            {/* Professional Input Area */}
            <div className="p-5 bg-white border-t border-slate-200">
              <div className="flex space-x-3">
                <div className="flex-1 relative">
                  <input
                    ref={inputRef}
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Ask me about AI strategy, implementation, ROI..."
                    className="w-full p-4 border-2 border-slate-300 rounded-2xl bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm text-slate-800 placeholder:text-slate-400 font-medium shadow-sm transition-all duration-200 hover:border-slate-400"
                    disabled={isTyping}
                  />
                </div>

                <Button
                  onClick={handleSendMessage}
                  disabled={!input.trim() || isTyping}
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white border-0 rounded-2xl px-4 transition-all duration-200 hover:shadow-lg disabled:opacity-50 disabled:hover:shadow-none"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                </Button>
              </div>

              {/* Professional Status Indicator */}
              <div className="mt-3 flex items-center justify-between text-xs">
                <div className="flex items-center space-x-2">
                  <div className={cn(
                    "w-2 h-2 rounded-full transition-colors",
                    isTyping ? "bg-blue-500 animate-pulse" : "bg-green-500"
                  )} />
                  <span className="text-slate-600 font-medium">
                    {isTyping ? 'Processing your request...' : 'Ready to assist'}
                  </span>
                </div>
                <span className="text-slate-500 font-medium tracking-wide">
                  GenAI Assistant
                </span>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default ChatBot;