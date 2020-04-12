import React from 'react';
import { ReactMic } from 'react-mic';
import PlayTrack from './PlayTrack';
import { API_HOST } from '../config';
 
export default class RecordContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      record: false
    }
 
  }
 
  startRecording = () => {
    this.setState({
      record: true
    });
  }
 
  stopRecording = () => {
    this.setState({
      record: false
    });
  }
 
  onData(recordedBlob) {
    // console.log('chunk of real-time data is: ', recordedBlob);
  }
 
  onStop(recordedBlob) {
    let formdata = new FormData();
    formdata.append('soundBlob', recordedBlob["blob"],  'latest.webm');

    var options = {
      method: 'POST',
      body: formdata,
      headers: new Headers({
        'enctype': 'multipart/form-data'
      })
    };

    fetch(API_HOST + '/audio', options).catch(console.log).then(console.log);
  }
 
  render() {
    return (
      <div>
        <PlayTrack />
        <ReactMic
          record={this.state.record}
          className="sound-wave"
          onStop={this.onStop}
          onData={this.onData}
          strokeColor="#000000"
          backgroundColor="#FF4081" />
        <button onClick={this.startRecording} type="button">Start</button>
        <button onClick={this.stopRecording} type="button">Stop</button>
      </div>
    );
  }
}