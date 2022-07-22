import './Home.css';
import React from 'react';
import Header from './Header';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = null;
  }

  render() {
    return (
      <>
        <Header />
        <main className="home">
          <h2>Welcome to our page!</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            tincidunt quis elit nec finibus. Pellentesque habitant morbi
            tristique senectus et netus et malesuada fames ac turpis egestas.
            Aenean cursus elit eget sem eleifend scelerisque nec et ex. Morbi
            non odio consequat, pellentesque neque vel, finibus ipsum. Maecenas
            vestibulum nisl tellus, sed scelerisque turpis tempor eu. Donec
            tempor nibh eget ligula accumsan pellentesque. Curabitur id
            convallis nulla. Praesent lectus tellus, vulputate eget blandit
            eget, consequat sit amet velit. Curabitur lectus magna, rutrum eu
            ante quis, ullamcorper vehicula nisi.
          </p>
          <p>
            Anim esse duis proident dolor. Eiusmod enim cupidatat nostrud quis
            et minim exercitation in incididunt amet esse aute. Sunt nostrud
            reprehenderit est reprehenderit commodo. Aute cillum aliquip enim
            occaecat amet. Excepteur minim mollit laborum fugiat. Esse sint nisi
            in ex consequat laborum culpa. Nostrud duis do dolore esse ullamco
            non velit ullamco deserunt sint.
          </p>
        </main>
      </>
    );
  }
}

export default Home;
