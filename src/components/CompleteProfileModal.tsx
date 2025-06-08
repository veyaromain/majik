import React, { useState } from 'react'

interface ProfileData {
  firstName: string
  lastName: string
  age: number
}

interface Props {
  onSave: (data: ProfileData) => void
}

const CompleteProfileModal: React.FC<Props> = ({ onSave }) => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [age, setAge] = useState('')

  const handleSubmit = () => {
    const ageNum = parseInt(age, 10)
    if (!firstName || !lastName || isNaN(ageNum)) return
    onSave({ firstName, lastName, age: ageNum })
  }

  const handleBackdrop = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      // prevent closing by accident
    }
  }

  return (
    <div
      className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4"
      onClick={handleBackdrop}
    >
      <div className="bg-white rounded-3xl max-w-md w-full p-8">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Complétez votre profil</h2>
        <div className="space-y-4">
          <input
            className="w-full border border-gray-200 rounded-lg p-2"
            placeholder="Prénom"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <input
            className="w-full border border-gray-200 rounded-lg p-2"
            placeholder="Nom"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
          <input
            className="w-full border border-gray-200 rounded-lg p-2"
            placeholder="Âge"
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
          <button
            onClick={handleSubmit}
            className="w-full magic-button bg-tomato-500 hover:bg-tomato-600 text-white py-2 px-4 rounded-xl"
          >
            Enregistrer
          </button>
        </div>
      </div>
    </div>
  )
}

export default CompleteProfileModal
