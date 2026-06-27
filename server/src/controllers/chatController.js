import Settings from '../models/Settings.js';

// @desc    Chat with Gemini AI assistant
// @route   POST /api/chat
// @access  Public
export const chatWithAI = async (req, res) => {
  const { messages } = req.body; // Array of { role, content }

  if (!messages || !Array.isArray(messages)) {
    return res.status(400).json({ message: 'Messages array is required' });
  }

  // Get user query from the last message
  const userQuery = messages[messages.length - 1]?.content || '';

  try {
    // Get settings to retrieve system prompt
    let settings = await Settings.findOne({});
    const systemPrompt = settings?.aiPrompt || `You are the AI Assistant of Aalap Bhavsar, a premium Full Stack Developer, React Developer, and Frontend Developer. 
Aalap is skilled in React.js, Next.js, JavaScript, TypeScript, Tailwind CSS, Node.js, Express.js, MongoDB, PostgreSQL, Git, GitHub, Redux Toolkit, and Figma.
He is available for Full Time, Internship, Freelance, and Remote Opportunities.
Keep your answers brief, professional, and friendly, as if you are showcasing his achievements and answering on his behalf. Always highlight his strengths.`;

    const apiKey = process.env.GEMINI_API_KEY;
    
    // Check if the API key is set to placeholder or empty
    if (!apiKey || apiKey === 'your_gemini_api_key_here' || apiKey.trim() === '') {
      // Mock response for testing/placeholder state
      const simulatedResponses = [
        "Hi there! I'm Aalap's AI Assistant. To get real-time AI responses, please configure the `GEMINI_API_KEY` in the server's `.env` file.",
        "Aalap is a brilliant developer! By the way, my live brain is currently offline because the `GEMINI_API_KEY` is not set in the environment files.",
        "I'd love to chat more, but I'm running in demo mode. Make sure the server's `.env` has a valid Gemini API Key!"
      ];
      const randomResponse = simulatedResponses[Math.floor(Math.random() * simulatedResponses.length)];
      
      // Simple custom responses based on user query keywords even in demo mode
      let customReply = randomResponse;
      const queryLower = userQuery.toLowerCase();
      if (queryLower.includes('skill') || queryLower.includes('experience') || queryLower.includes('what can he do')) {
        customReply = "Aalap is highly skilled in React.js, Next.js, JavaScript, TypeScript, Node.js, Express.js, and MongoDB. (Demo response - please configure GEMINI_API_KEY for dynamic answers)";
      } else if (queryLower.includes('contact') || queryLower.includes('hire') || queryLower.includes('email')) {
        customReply = "You can contact Aalap using the Contact form on this website or email him directly. (Demo response - please configure GEMINI_API_KEY for dynamic answers)";
      }
      
      return res.json({ reply: customReply });
    }

    // Format messages for Gemini API
    // Gemini roles: 'user' and 'model'
    const contents = messages.map(msg => ({
      role: msg.role === 'assistant' ? 'model' : 'user',
      parts: [{ text: msg.content }]
    }));

    // Call Gemini API using native fetch
    const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        systemInstruction: {
          parts: [{ text: systemPrompt }]
        },
        contents
      })
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      console.error('Gemini API error:', errorData);
      throw new Error(errorData.error?.message || `Failed to call Gemini API: ${response.statusText}`);
    }

    const data = await response.json();
    const reply = data.candidates?.[0]?.content?.parts?.[0]?.text || 'I could not generate a response. Please try again.';

    res.json({ reply });
  } catch (error) {
    console.error('AI Chat Error:', error.message);
    res.status(500).json({ message: 'Error processing AI chat response', error: error.message });
  }
};
