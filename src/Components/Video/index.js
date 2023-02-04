import React, {useState, useCallback, useRef} from 'react';
import {Button, View, Alert, Text} from 'react-native';
import YoutubePlayer from 'react-native-youtube-iframe';
import COLORS from '../../consts/colors';

export default function VideoPlayer({videoId}) {
  const [playing, setPlaying] = useState(false);

  const onStateChange = useCallback(state => {
    if (state === 'ended') {
      setPlaying(false);
      Alert.alert('video has finished playing!');
    }
  }, []);

  const togglePlaying = useCallback(() => {
    setPlaying(prev => !prev);
  }, []);

  return (
    <View>
      <Text
        style={{
          fontSize: 16,
          fontWeight: '500',
          color: COLORS.dark,
          marginBottom: 10,
        }}>
        Video
      </Text>
      <YoutubePlayer
        height={200}
        play={playing}
        videoId={videoId ? videoId : null}
        onChangeState={onStateChange}
      />
      {/* <Button title={playing ? 'pause' : 'play'} onPress={togglePlaying} /> */}
    </View>
  );
}
