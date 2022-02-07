import React, { useContext } from 'react';

const settings = {
  home: {
    sound: 100,
    brightness: 100,
  },
};

const profiles = {
  first: {
    name: "Maria",
    color: "pink",
  },
  second: {
    name: "India",
    color: "purple",
  },
};

const SettingsContext = React.createContext();
const ProfilesContext = React.createContext();

function Display() {
  const settingsValue = useContext(SettingsContext);
  const profilesValue = useContext(ProfilesContext);

  return (
    <div>
      <h2>useContext:</h2>
      <p>First person's name: {profilesValue.first.name}</p>
      <p>First person's color: {profilesValue.first.color}</p>
      <p>Sound settings: {settingsValue.home.sound}</p>
    </div>
  );
}

export default function UseContext() {
  return (
    <SettingsContext.Provider value={settings}>
      <ProfilesContext.Provider value={profiles}>
        <Display />
      </ProfilesContext.Provider>
    </SettingsContext.Provider>
  );
}
