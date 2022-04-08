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
        <Section title="Task 1: User Profile (hoverable)">
          <Profile
            name={user.name}
            tag={user.tag}
            location={user.location}
            avatar={user.avatar}
            followers={user.stats.followers}
            views={user.stats.views}
            likes={user.stats.likes}/>
        </Section>
        <Section title="Task 2: User Files Upload Statistics">
          <Statistics stats={statData}/>
        </Section>
        <Section title="Task 3: User Friends List">
         <FriendList items={friends}/>
        </Section>
        <Section title="Task 4: User Transactions">
         <TransactionHistory items={transactions}/>
        </Section>
      </>
    );
  }
  
  export default App;