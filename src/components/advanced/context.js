import React from 'react';

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
  return (
    <ProfilesContext.Consumer>
      {(profilesValue) => (
        <SettingsContext.Consumer>
          {(settingsValues) => (
            <div>
              <h2>Context:</h2>
              <p>First person's name: {profilesValue.first.name}</p>
              <p>First person's color: {profilesValue.first.color}</p>
              <p>Sound settings: {settingsValues.home.sound}</p>
            </div>
          )}
        </SettingsContext.Consumer>
      )}
    </ProfilesContext.Consumer>
  );
}

export default function Context() {
  return (
    <SettingsContext.Provider value={settings}>
      <ProfilesContext.Provider value={profiles}>
        <Display />
      </ProfilesContext.Provider>
    </SettingsContext.Provider>
  );
}
