import { useState } from 'react'
import supabase from '../../Supabase'
import Button from '../UIComponents/Button/button'
import Alert from '../UIComponents/Alert/alert'

export default function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [mensagem, setMensagem] = useState('')
  const [alert, setAlert] = useState(false)
  const [alertError, setAlertError] = useState(false)

  async function handleSubmit(e) {
    e.preventDefault()

    if (name.length > 0 && email.length > 0 && mensagem.length > 0) {
      const { data, error } = await supabase
        .from('portifolio')
        .insert([{ nome: name, email: email, text: mensagem }])
        .select()
      setName('')
      setEmail('')
      setMensagem('')
      setAlert(true)
      setTimeout(() => {
        setAlert(false)
      }, 3000)
    } else {
      setAlertError(true)
      setTimeout(() => {
        setAlertError(false)
      }, 3000)
    }
  }

  return (
    <div className="p-3">
      <div className="text-2xl font-bold">Contato</div>
      <div className="border p-5 rounded">
        <form className="mt-3">
          <div className="flex flex-col gap-3">
            <div className="p-3 border flex gap-3 rounded">
              <label className="">Nome:</label>
              <input
                value={name}
                onChange={e => setName(e.target.value)}
                type="Nome"
                placeholder="Digite seu nome"
                className="w-screen border-none"
              />
            </div>
            <div className="p-3 border flex gap-3 rounded">
              <label className="">Email:</label>
              <input
                value={email}
                onChange={e => setEmail(e.target.value)}
                type="email"
                placeholder="Digite seu email"
                className="w-screen border-none"
              />
            </div>
            <div className="p-3 border flex gap-3 rounded">
              <label className="">Mensagem:</label>
              <textarea
                value={mensagem}
                onChange={e => setMensagem(e.target.value)}
                className="w-full"
              />
            </div>
          </div>
          {alert && <Alert alert={'Mensagem Enviada !!'} color={'orange'} />}
          {alertError && (
            <Alert
              alert={'Erro ao enviar, tente novamente ou mais tarde !!'}
              color={'red'}
            />
          )}
          <Button
            onClick={handleSubmit}
            button={'Enviar'}
            color={'blue'}
            colorText={'white'}
          />
        </form>
      </div>
    </div>
  )
}
