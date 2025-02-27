import { AIConversation } from '@aws-amplify/ui-react-ai';
import { useAIConversation } from './client';
import ReactMarkdown from 'react-markdown';
import rehypeHighlight from 'rehype-highlight';

export default function ChatComponent() {
  const [
    {
      data: { messages },
      isLoading,
    },
    handleSendMessage,
  ] = useAIConversation('chat');
  // 'chat' is based on the key for the conversation route in your schema.

  return (
      <AIConversation
        messages={messages}
        isLoading={isLoading}
        handleSendMessage={handleSendMessage}
        displayText={{
          getMessageTimestampText: (date) => new Intl.DateTimeFormat('en-US', {
            timeStyle: 'short',
            hour12: true,
            timeZone: 'UTC'
          }).format(date)
        }}
        messageRenderer={{
          text: ({ text }) => (
            <ReactMarkdown rehypePlugins={[rehypeHighlight]}>
              {text}
            </ReactMarkdown>
          )
        }}
        avatars={{
          ai: {
            username: "Mindly"
          }
        }}
      />
  );
}