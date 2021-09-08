import React from 'react';

export default class FetchRandomUser extends React.Component {
  state = {
    loading: true,
    person: null,
  };

  async componentDidMount() {
    const url =
      'https://b24-r40aun.bitrix24.ru/rest/1/nb3v31fuuv52gpgk/crm.deal.list.json';
    const response = await fetch(url);
    const data = await response.json();
    const f1 = data.result;
    // const deals = f1.map((deal) => deal.ID);
    console.log(f1);

    this.setState({ person: f1[1], loading: false });
  }

  render() {
    if (this.state.loading) {
      return <div>loading...</div>;
    }

    if (!this.state.person) {
      return <div>didn't get a person</div>;
    }

    return (
      <div>
        <div>{this.state.person.TITLE}</div>
        <div>{this.state.person.TYPE_ID}</div>
        <div>{this.state.person.OPPORTUNITY}</div>
      </div>
    );
  }
}
