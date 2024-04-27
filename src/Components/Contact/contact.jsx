import Button from '../UIComponents/Button/button'

export default function Contact() {
  return (
    <div className="p-3">
      <div className="text-2xl font-bold">Contato</div>
      <div className="border p-5 rounded">
        <form className="mt-3">
          <div className="flex flex-col gap-3">
            <div className="p-3 border flex gap-3 rounded">
              <label className="">Nome:</label>
              <input
                type="Nome"
                placeholder="Digite seu nome"
                className="w-screen border-none"
              />
            </div>
            <div className="p-3 border flex gap-3 rounded">
              <label className="">Email:</label>
              <input
                type="email"
                placeholder="Digite seu email"
                className="w-screen border-none"
              />
            </div>
            <div className="p-3 border flex gap-3 rounded">
              <label className="">Email:</label>
              <textarea className="w-full" />
            </div>
          </div>
          <Button button={'Enviar'} color={'blue'} colorText={'white'} />
        </form>
      </div>
    </div>
  )
}
