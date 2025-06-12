// En: src/components/ElansChatWidget.tsx

// Esta declaración es para que TypeScript no chille y entienda la etiqueta rara.
declare global {
    namespace JSX {
      interface IntrinsicElements {
        'elevenlabs-convai': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & { 'agent-id': string };
      }
    }
  }
  
  const ElansChatWidget = () => {
    return (
      <elevenlabs-convai agent-id="agent_01jwwh5pdnf748ntbt6hakyn4k"></elevenlabs-convai>
    );
  };
  
  export default ElansChatWidget;