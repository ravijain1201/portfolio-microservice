import React, { useState, useRef, useEffect } from 'react';
import './Chatbot.css';

interface Message {
  id: number;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

interface ChatbotProps {
  resume: any;
}

const Chatbot: React.FC<ChatbotProps> = ({ resume }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hi! I'm Ravi's AI assistant. Ask me anything about his experience, skills, or background!",
      isUser: false,
      timestamp: new Date()
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const generateResponse = (query: string): string => {
    const lowerQuery = query.toLowerCase();
    
    if (lowerQuery.includes('experience') || lowerQuery.includes('work')) {
      return `Ravi has ${resume.experience.length} professional experiences including roles at ${resume.experience.slice(0, 3).map((exp: any) => exp.company.split(',')[0]).join(', ')}. His current role is ${resume.experience[0].position} at ${resume.experience[0].company}.`;
    }
    
    if (lowerQuery.includes('skill') || lowerQuery.includes('technology')) {
      const allSkills = [...resume.skills.backend, ...resume.skills.frontend, ...resume.skills.tools];
      return `Ravi's key skills include: ${allSkills.slice(0, 6).join(', ')} and many more. He specializes in full-stack development with Java and React.`;
    }
    
    if (lowerQuery.includes('education') || lowerQuery.includes('degree')) {
      return `Ravi holds a ${resume.education.degree} from ${resume.education.college}, ${resume.education.university} with ${resume.education.percentage} score.`;
    }
    
    if (lowerQuery.includes('contact') || lowerQuery.includes('email') || lowerQuery.includes('phone')) {
      return `You can reach Ravi at ${resume.contact.email} or ${resume.contact.phone}. He's located in ${resume.contact.location}.`;
    }
    
    if (lowerQuery.includes('certification') || lowerQuery.includes('certificate')) {
      return `Ravi has ${resume.certifications.length} certifications including NCFM certifications in Investment Analysis, Equity Derivatives, and Mutual Funds.`;
    }
    
    if (lowerQuery.includes('award') || lowerQuery.includes('achievement')) {
      return `Ravi has received several awards: ${resume.awards.join(', ')}.`;
    }
    
    if (lowerQuery.includes('current') || lowerQuery.includes('now')) {
      return `Currently, Ravi works as ${resume.experience[0].position} at ${resume.experience[0].company} since ${resume.experience[0].duration}.`;
    }
    
    if (lowerQuery.includes('interest') || lowerQuery.includes('hobby')) {
      return `Ravi's interests include: ${resume.interests}`;
    }
    
    return "I can help you learn about Ravi's experience, skills, education, certifications, awards, or contact information. What would you like to know?";
  };

  const handleSendMessage = async () => {
    if (!inputText.trim()) return;

    const userMessage: Message = {
      id: Date.now(),
      text: inputText,
      isUser: true,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputText('');
    setIsTyping(true);

    // Simulate typing delay
    setTimeout(() => {
      const botResponse: Message = {
        id: Date.now() + 1,
        text: generateResponse(inputText),
        isUser: false,
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Chat Toggle Button */}
      <button
        className={`chat-toggle ${isOpen ? 'open' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle chat"
      >
        {isOpen ? '✕' : '💬'}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="chatbot-container">
          <div className="chatbot-header">
            <h3>Ask about Ravi</h3>
            <button onClick={() => setIsOpen(false)} className="close-btn">✕</button>
          </div>
          
          <div className="chatbot-messages">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`message ${message.isUser ? 'user' : 'bot'}`}
              >
                <div className="message-content">
                  {message.text}
                </div>
                <div className="message-time">
                  {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </div>
              </div>
            ))}
            
            {isTyping && (
              <div className="message bot">
                <div className="message-content typing">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
          
          <div className="chatbot-input">
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Ask about experience, skills, education..."
              maxLength={500}
            />
            <button onClick={handleSendMessage} disabled={!inputText.trim()}>
              Send
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;