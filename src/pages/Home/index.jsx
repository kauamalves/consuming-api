import './style.css'
import Trash from '../../assets/trash.svg'

function Home() {

  const users = [
    {
      id: '12',
      name: 'Cabeça',
      email: 'cabeça@gmail.com',
      age: 17,
    },

    {
      id: '11',
      name: 'Camila',
      email: 'camilaandrad@gmail.com',
      age: 16,
    }
  ];

  return (
    <>
      <div className='container'>
        <form action="post">
          <div className="inputs">
            <h1>Cadastro de usuários</h1>

            <input type="text" placeholder='Insira seu nome' />
            <input type="number" placeholder='Insira sua idade' />
            <input type="email" placeholder='johndoe@email.com' />

            <button type="submit">Enviar</button>

          </div>
        </form>

        {users.map(user => (
          <div key={user.id} className="users">
            <p>Id: <span>{user.id}</span></p>
            <p>Nome: <span>{user.name}</span></p>
            <p>Idade: <span>{user.age}</span></p>
            <p>Email: <span>{user.email}</span></p>
            <div className="removeUser">
              <button>
                <img src={Trash} alt="Remover usuário" />
              </button>
            </div>
          </div>
        ))}
      </div>

    </>
  )
}

export default Home
