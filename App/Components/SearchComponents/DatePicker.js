import React, { Component } from 'react';
// import ReactNative from 'react-native';
import { DatePickerIOS, StyleSheet, View } from 'react-native';
import { connect } from 'react-redux';
import { updateDate } from '../../Actions/searchActions.js';

class DatePicker extends Component {

  onDateChange(date) {
    console.log('NEW DATE', `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`);
    this.setState({ date });
  }

  render() {
    return (
      <View>
        <DatePickerIOS
          style={styles.picker}
          date={new Date(this.props.search.date)}
          mode='date'
          timeZoneOffsetInMinutes={0}
          onDateChange={(e) => {
            console.log('datepicker e', e)
             this.props.dispatch(updateDate(e));
              }}
        />
      </View>
    );
  }
}


const styles = StyleSheet.create({
  picker: {
    width: 350
  }
});

const mapStateToProps = state => (state);

export default connect(mapStateToProps)(DatePicker);
