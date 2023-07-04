import { useState } from 'react';
import Banner from './components/Banner/Banner'
import Forms from './components/molecules/Forms/Forms'

function App() {
  const [contributors, setContributors] = useState([])

  const toEachNewContributorAdded = (contributor) => {
    console.log(contributor)
    setContributors([...contributors, contributor])
  }

  return (
    <div className="App">
      <Banner />
      <Forms toEachRegisteredContributor={contributor => toEachNewContributorAdded(contributor)} />
    </div>
  );
}

export default App;
