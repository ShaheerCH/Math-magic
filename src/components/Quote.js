import './Quote.css';
import React from 'react';
import Header from './Header';

class Quote extends React.Component {
  constructor(props) {
    super(props);
    this.state = null;
  }

  render() {
    return (
      <>
        <Header />
        <main className="quote">
          <blockquote>
            <p>Heisenberg &quot;Whats My Name You are Goddamn right &quot;</p>
          </blockquote>
        </main>
      </>
    );
  }
}

export default Quote;
