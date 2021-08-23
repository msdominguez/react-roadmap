import { useEffect, useState } from 'react';

function useArtist(songID) {
  const [artist, setArtist] = useState(null);

  useEffect(() => {
      if (songID === 'Jungle Juice') {
        setArtist('Dirt Monkey');
      } else if (songID === 'Step in Time') {
        setArtist('Jantsen');
      }
    });
    return artist;
}

export function CustomHookChildOne(props) {
  const artist = useArtist(props.song);

  return (
    <p style={{ color: artist === "Dirt Monkey" ? "brown" : "black" }}>{artist} - {props.song}</p>
  );
}

export function CustomHookChildTwo(props) {
  const artist = useArtist(props.song);

  return (
    <p style={{ color: artist === "Jantsen" ? "blue" : "black" }}>{artist} - {props.song}</p>
  );
}

export default function CustomHookParent() {
  return <div><CustomHookChildOne song="Jungle Juice" /><CustomHookChildTwo song="Step in Time" /></div>;
}
