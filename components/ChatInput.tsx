'use client'

import { FormEvent, useState } from 'react'

function ChatInput() {
  const [input, setInput] = useState('')
  function addMessage(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (!input) return

    const messageToSend = input

    setInput('')
  }

  return (
    <div>
      <form
        onSubmit={addMessage}
        className="flex px-10 py-5 space-x-2 border-t  fixed bottom-0 z-50 w-full border-gray-100 "
      >
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          type="text"
          placeholder="Enter a Message"
          className="flex-1 
        rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent px-5 py-3 disabled:opacity-10 disabled:cursor-not-allowed 
        "
        />
        <button
          type="submit"
          disabled={!input}
          className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Send
        </button>
      </form>
    </div>
  )
}
export default ChatInput
