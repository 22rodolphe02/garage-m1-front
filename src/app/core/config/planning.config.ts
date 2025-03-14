import {CalendarOptions} from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import interactionPlugin from '@fullcalendar/interaction';

export let planningConfig: CalendarOptions = {
  initialView: 'dayGridMonth',
  selectable: true,
  editable: true,
  views: {
    timeGridFourDay: {
      type: 'timeGrid',
      duration: { days: 4 },
      buttonText: '4 day'
    }
  },
  plugins: [dayGridPlugin, timeGridPlugin, listPlugin, interactionPlugin],
};
