import { useState } from 'react';
import Banner from './components/Banner/Banner'
import Forms from './components/molecules/Forms/Forms'
import Team from './components/molecules/Team/Team';
import Footer from './components/organisms/Footer/Footer';

function App() {

  const teams = [
    {
      name: 'Programação',
      primaryColor: '#57C278',
      secondaryColor: '#d9f7e9',
    },

    {
      name: 'Front-End',
      primaryColor: '#82CFFA',
      secondaryColor: '#E8F8FF',
    },

    {
      name: 'Data Science',
      primaryColor: '#A6D157',
      secondaryColor: '#F0F8E2',
    },

    {
      name: 'DevOps',
      primaryColor: '#E06B69',
      secondaryColor: '#FDE7E8',
    },

    {
      name: 'UX e Design',
      primaryColor: '#DB6EBF',
      secondaryColor: '#FAE9F5',
    },

    {
      name: 'Mobile',
      primaryColor: '#FFBA05',
      secondaryColor: '#FFF5D9',
    },

    {
      name: 'Inovação e Gestão',
      primaryColor: '#FF8A29',
      secondaryColor: '#FFEEDF',
    },
  ]

  const [contributors, setContributors] = useState([])

  const toEachNewContributorAdded = (contributor) => {
    setContributors([...contributors, contributor])
  }

  return (
    <div className="App">
      <Banner />
      <Forms
        teams={teams.map(team => team.name)}
        toEachRegisteredContributor={contributor => toEachNewContributorAdded(contributor)} />

      {teams.map(team =>
        <Team
          key={team.name}
          title={team.name}
          backgroundColor={team.secondaryColor}
          primaryColor={team.primaryColor}
          contributors={contributors.filter(contributor => contributor.team === team.name)}
        />
      )}
      <Footer />
    </div>
  );
}

export default App;
