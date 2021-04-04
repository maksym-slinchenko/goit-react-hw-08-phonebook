import React from 'react';

const styles = {
  container: {
    minHeight: 'calc(100vh - 50px)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontWeight: 500,
    fontSize: 48,
    textAlign: 'center',
  },
  img: { width: 100 },
};

const HomeView = () => (
  <div style={styles.container}>
    <h1 style={styles.title}>Phonebook Welcome page</h1>
    <img
      style={styles.img}
      alt="avatar"
      src="https://image.flaticon.com/icons/png/512/3447/3447682.png"
    ></img>
  </div>
);

export default HomeView;
