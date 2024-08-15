import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
 
// Usage in App component
export default function App() {
  const [calendarId, setCalendarId] = useState(null);
  const EventForm = ({ onSave }) => {
    const [title, setTitle] = useState('');
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

  useEffect(() => {
    (async () => {
      if (Platform.OS === 'android') {
        const { status } = await Calendar.requestCalendarPermissionsAsync();
        if (status === 'granted') {
          const calendars = await Calendar.getCalendarsAsync(Calendar.EntityTypes.EVENT);
          const defaultCalendar = calendars.find(cal => cal.source.name === 'Default');
          setCalendarId(defaultCalendar.id);
        }
      }
    })();
  }, []);
 
  const handleSave = async (eventDetails) => {
    if (calendarId) {
      await createEvent(calendarId, eventDetails);
    }
  };

  return (
    <View>
    <Text>Title:</Text>
    <TextInput value={title} onChangeText={setTitle} />
    <Text>Start Date:</Text>
    <DateTimePicker value={startDate} onChange={(_, date) => setStartDate(date || startDate)} />
    <Text>End Date:</Text>
    <DateTimePicker value={endDate} onChange={(_, date) => setEndDate(date || endDate)} />
    <Button title="Save" onPress={() => onSave({ title, startDate, endDate })} />
    </View>
      );
    }
  }