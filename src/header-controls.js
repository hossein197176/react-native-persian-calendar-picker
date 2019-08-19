/**
 * Persian Calendar Picker Component
 *
 * Copyright 2016 Reza (github.com/rghorbani)
 * Licensed under the terms of the MIT license. See LICENSE file in the project root for terms.
 */

'use strict';

const React = require('react');
const PropTypes = require('prop-types');
const { Text, View } = require('react-native');

const Utils = require('./utils');
const Controls = require('./controls');

function HeaderControls(props) {
  const {
    styles,
    currentMonth,
    currentYear,
    onPressNext,
    onPressPrevious,
    onPressPreviousYear,
    onPressNextYear,
    onLongPressPreviousYear,
    onLongPressNextYear,
    months,
    previousTitle,
    nextTitle,
    previousYearTitle,
    nextYearTitle,
    textStyle,
  } = props;
  const MONTHS = months ? months : Utils.MONTHS; // English Month Array
  // getMonth() call below will return the month number, we will use it as the
  // index for month array in english
  
  const previous = previousTitle ? previousTitle : 'قبلی';
  const next = nextTitle ? nextTitle : 'بعدی';
  const previousYear = previousYearTitle ? previousYearTitle : 'سال قبل';
  const nextYear = nextYearTitle ? nextYearTitle : 'سال بعد';
  // const previous = previousTitle ? previousTitle : '>';
  // const next = nextTitle ? nextTitle : '<';
  // const previousYear = previousYearTitle ? previousYearTitle : '>>';
  // const nextYear = nextYearTitle ? nextYearTitle : '<<';
  const month = MONTHS[currentMonth];
  const year = currentYear;

  return (
    <View style={styles.headerWrapper}>
      <View style = {styles.leftSelectors}>
        <Controls
          label={previousYear}
          onPressControl={onPressPreviousYear}
          onLongPress={onLongPressPreviousYear}
          styles={[styles.monthSelector, styles.prev]}
          textStyles={textStyle}
        />
        <Controls
          label={previous}
          onPressControl={onPressPrevious}
          styles={[styles.monthSelector, styles.prev]}
          textStyles={textStyle}
        />
      </View>
      <View>
        <Text style={[styles.monthLabel, textStyle]}>
           {month} {year.toString().toPersianDigits()}
        </Text>
      </View>
      <View style = {styles.rightSelectors}>
        <Controls
          label={next}
          onPressControl={onPressNext}
          styles={[styles.monthSelector, styles.next]}
          textStyles={textStyle}
        />
        <Controls
          label={nextYear}
          onPressControl={onPressNextYear}
          onLongPress={onLongPressNextYear}
          styles={[styles.monthSelector, styles.next]}
          textStyles={textStyle}
        />
      </View>
    </View>
  );
}

HeaderControls.propTypes = {
  currentMonth: PropTypes.number,
  currentYear: PropTypes.number,
  onPressNext: PropTypes.func,
  onPressPrevious: PropTypes.func,
};

module.exports = HeaderControls;
