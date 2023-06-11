import React from 'react'
import { useState, useEffect } from 'react'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../firebase'
import Table from 'react-bootstrap/Table'

const QuestionsTable = () => {
  const [questions, setQuestions] = useState([])

  //gauti duomenis is db
  const getDataFromFirestore = async () => {
    const querySnapshot = await getDocs(collection(db, 'clientsRequests'))
    const tempQuestion = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }))
    console.log(tempQuestion)
    setQuestions(tempQuestion)
  }

  useEffect(() => {
    getDataFromFirestore()
  }, [])
  console.log(questions)

  return (
    <Table>
      <thead size="sm">
        <tr>
          <th>ID</th>
          <th>Client Name</th>
          <th>Message</th>
        </tr>
      </thead>
      <tbody>
        {questions &&
          questions.map((oneQuestion, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{oneQuestion.name}</td>
              <td>{oneQuestion.client_message}</td>
            </tr>
          ))}
      </tbody>
    </Table>
  )
}

export default QuestionsTable
