import { FaGithub, FaSitemap } from 'react-icons/fa'

export default function CardsProjects({ dados }) {
  console.log(dados)
  return (
    <>
      {dados.map(item => (
        <div className="" key={item.id}>
          <div className="w-full border flex flex-col items-center">
            <img
              alt={item.title}
              className="rounded-t-lg bg-slate-600 text-white"
              height=""
              src={item.img}
              style={{
                aspectRatio: '192/192',
                objectFit: 'cover'
              }}
              width="250"
            />
            <div className="p-4">
              <h5 className="text-lg font-semibold">{item.title}</h5>
              <p className="text-sm text-gray-600">
                <strong>Stack:</strong> {item.stack}
              </p>
              {item.status === 'em breve' && (
                <p className="text-sm text-gray-600 mb-2">
                  <strong>Status:</strong>{' '}
                  <span className=" bg-yellow-600 p-1 text-white  rounded">
                    {item.status}
                  </span>
                </p>
              )}
              {item.status === 'em breve' ? (
                <>
                  <a
                    href={item.repository}
                    target="_blank"
                    className="text-sm text-gray-600"
                  >
                    <span className="flex gap-3 items-center text-1xl">
                      <FaGithub />
                      <button
                        disabled
                        className="bg-orange-600 p-1 rounded m-1 text-white cursor-not-allowed"
                      >
                        Acessar repositorio
                      </button>
                    </span>
                  </a>

                  <a
                    href={item.site}
                    target="_blank"
                    className="text-sm text-gray-600"
                  >
                    <span className="flex gap-3 items-center text-1xl">
                      <FaSitemap />
                      <button
                        disabled
                        className="bg-red-600 p-1 rounded m-1 text-white cursor-not-allowed"
                      >
                        Acessar site
                      </button>
                    </span>
                  </a>
                </>
              ) : (
                <>
                  <a
                    href={item.repository}
                    target="_blank"
                    className="text-sm text-gray-600"
                  >
                    <span className="flex gap-3 items-center text-1xl">
                      <FaGithub />
                      <button className="bg-orange-600 p-1 rounded m-1 text-white">
                        Acessar repositorio
                      </button>
                    </span>
                  </a>

                  <a
                    href={item.site}
                    target="_blank"
                    className="text-sm text-gray-600"
                  >
                    <span className="flex gap-3 items-center text-1xl">
                      <FaSitemap />
                      <button className="bg-red-600 p-1 rounded m-1 text-white">
                        Acessar site
                      </button>
                    </span>
                  </a>
                </>
              )}
            </div>
          </div>
        </div>
      ))}
    </>
  )
}
