import React from 'react';
import Profile from 'components/Profile/Profile';
import user from 'components/Profile/user.json';
import Statistics from 'components/Statistics/Statistics';
import statData from 'components/Statistics/statistical-data.json';
import FriendList from 'components/FriendList/FriendList';
import friends from 'components/FriendList/friends.json';
import TransactionHistory from 'components/TransactionHistory/TransactionHistory';
import transactions from 'components/TransactionHistory/transactions.json';
import Section from 'components/Section/Section';

function App() {
    return (
      <>
        <Section>
          <Profile
            name={user.name}
            tag={user.tag}
            location={user.location}
            avatar={user.avatar}
            followers={user.stats.followers}
            views={user.stats.views}
            likes={user.stats.likes}/>
        </Section>
        <Section>
          <Statistics title="Upload stats"stats={statData}/>
        </Section>
        <Section>
         <FriendList items={friends}/>
        </Section>
        <Section>
         <TransactionHistory items={transactions}/>
        </Section>
      </>
    );
  }
  
  export default App;