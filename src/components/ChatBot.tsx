import { useState } from "react";
import { MessageCircle, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Chat Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={() => setIsOpen(!isOpen)}
          className="w-14 h-14 rounded-full bg-gradient-primary hover:shadow-glow transition-bounce shadow-elegant"
          size="icon"
        >
          {isOpen ? (
            <X className="w-6 h-6 text-foreground" />
          ) : (
            <MessageCircle className="w-6 h-6 text-foreground" />
          )}
        </Button>
      </div>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-80 h-96 bg-card rounded-2xl border border-border shadow-elegant z-50 overflow-hidden">
          <div className="bg-gradient-primary p-4 text-center">
            <h3 className="text-foreground font-semibold">Consultas Studio Bless</h3>
            <p className="text-sm text-foreground/80">¿En qué podemos ayudarte?</p>
          </div>
          <iframe 
            src="https://copilotstudio.microsoft.com/environments/Default-6ca34ae1-466f-44bc-a7aa-0ac5a78c61b1/bots/cr3a3_studioBless/webchat?__version__=2" 
            frameBorder="0" 
            className="w-full h-full"
            title="Studio Bless ChatBot"
          />
        </div>
      )}
    </>
  );
};

export default ChatBot;