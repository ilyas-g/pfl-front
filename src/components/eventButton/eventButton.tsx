import React from 'react'

export const eventButton = () => {
  return (
    <div>
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="save-button"
      onClick={() => (modalOpen ? close() : open())}
    >
      Launch modal
    </motion.button>
  </div>
  )
}
