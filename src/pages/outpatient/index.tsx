import React from 'react';
import { Calendar } from 'lucide-react';
import { Card } from '../../components/common/Card';
import { ChatInterface } from '../../components/chat/ChatInterface';
import { OUTPATIENT_SUGGESTIONS } from '../../components/chat/constants/suggestions';

export default function OutpatientPage() {
  const handleMessage = async (message: string) => {
    try {
      console.log('Processing message:', message);
      await new Promise(resolve => setTimeout(resolve, 1000));
      return `Response to: ${message}`;
    } catch (error) {
      console.error('Error processing message:', error);
      throw error;
    }
  };

  return (
    <Card 
      title="Oncology Outpatient" 
      icon={<Calendar />}
      iconColor="text-blue-600"
    >
      <ChatInterface
        suggestions={OUTPATIENT_SUGGESTIONS}
        onSendMessage={handleMessage}
        placeholder="Ask about cancer staging, diagnosis, or treatment planning..."
      />
    </Card>
  );
}