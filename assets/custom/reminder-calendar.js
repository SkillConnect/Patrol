var events = [{
  start: "2022-08-20",
  title: "Reminder 1",
  reminder: {
    frequency: "Weekly",
    amount: "$50"
  },
  className: 'bg-soft-primary'
},{
  start: "2022-08-04",
  title: "Reminder 2",
  reminder: {
    frequency: "Monthly",
    amount: "$50"
  },
  className: 'bg-soft-primary'
}];

var appCalendarInit = function appCalendarInit() {
  var Selectors = {
    ACTIVE: '.active',
    CALENDAR: '#appCalendar',
    CALENDAR_TITLE: '.calendar-title',
    DATA_CALENDAR_VIEW: '[data-fc-view]',
    DATA_EVENT: '[data-event]',
    DATA_VIEW_TITLE: '[data-view-title]',
    EVENT_DETAILS_MODAL: '#eventDetailsModal',
    EVENT_DETAILS_MODAL_CONTENT: '#eventDetailsModal .modal-content',
    EVENT_START_DATE: '#addEventModal [name="startDate"]',
    INPUT_TITLE: '[name="title"]'
  };
  var Events = {
    CLICK: 'click',
    SHOWN_BS_MODAL: 'shown.bs.modal',
    SUBMIT: 'submit'
  };
  var DataKeys = {
    EVENT: 'event',
    FC_VIEW: 'fc-view'
  };
  var ClassNames = {
    ACTIVE: 'active'
  };
  var eventList = events.reduce(function (acc, val) {
    return val.schedules ? acc.concat(val.schedules.concat(val)) : acc.concat(val);
  }, []);

  var updateTitle = function updateTitle(title) {
    document.querySelector(Selectors.CALENDAR_TITLE).textContent = title;
  };

  var appCalendar = document.querySelector(Selectors.CALENDAR);
  var eventDetailsModal = document.querySelector(Selectors.EVENT_DETAILS_MODAL);

  if (appCalendar) {
    var calendar = renderCalendar(appCalendar, {
      headerToolbar: false,
      dayMaxEvents: 2,
      height: 800,
      stickyHeaderDates: false,
      views: {
        week: {
          eventLimit: 3
        }
      },
      eventTimeFormat: {
        hour: 'numeric',
        minute: '2-digit',
        omitZeroMinute: true,
        meridiem: true
      },
      events: eventList,
      eventClick: function eventClick(info) {
        var template = getModalContent(info.event);
        document.querySelector(Selectors.EVENT_DETAILS_MODAL_CONTENT).innerHTML = template;
        var modal = new window.bootstrap.Modal(eventDetailsModal);
        modal.show();
      }
    });
    updateTitle(calendar.currentData.viewTitle);
    document.querySelectorAll(Selectors.DATA_EVENT).forEach(function (button) {
      button.addEventListener(Events.CLICK, function (e) {
        var el = e.currentTarget;
        var type = utils.getData(el, DataKeys.EVENT);

        switch (type) {
          case 'prev':
            calendar.prev();
            updateTitle(calendar.currentData.viewTitle);
            break;

          case 'next':
            calendar.next();
            updateTitle(calendar.currentData.viewTitle);
            break;

          case 'today':
            calendar.today();
            updateTitle(calendar.currentData.viewTitle);
            break;

          default:
            calendar.today();
            updateTitle(calendar.currentData.viewTitle);
            break;
        }
      });
    });
    document.querySelectorAll(Selectors.DATA_CALENDAR_VIEW).forEach(function (link) {
      link.addEventListener(Events.CLICK, function (e) {
        e.preventDefault();
        var el = e.currentTarget;
        var text = el.textContent;
        el.parentElement.querySelector(Selectors.ACTIVE).classList.remove(ClassNames.ACTIVE);
        el.classList.add(ClassNames.ACTIVE);
        document.querySelector(Selectors.DATA_VIEW_TITLE).textContent = text;
        calendar.changeView(utils.getData(el, DataKeys.FC_VIEW));
        updateTitle(calendar.currentData.viewTitle);
      });
    });
  }
};

function getModalContent(event) {
  return `
    <div class="modal-header bg-light ps-card pe-5 border-bottom-0 ${event.classNames[0]}">
      <div> <h5 class="modal-title mb-0"> ${event.title} </h5> </div>
    </div>
    <div class="modal-body">
      ${getModalTableBody(event.start.toDateString(), event.title, event.extendedProps.reminder)}
    </div>
    <div class="modal-footer">
      <button class="btn btn-secondary" type="button" data-bs-dismiss="modal">Close</button>
    </div>`
}

function getModalTableBody(date, title, reminder) {
  const template = `
    <form>
      <div class="mb-3">
        <label class="form-label">Reminder for:</label>
        <input type="text" class="form-control" value="{}" readonly="readonly">
      </div>
      <div class="mb-3">
        <label class="form-label">Starts from:</label>
        <input class="form-control form-control-sm" value="{}" readonly="readonly">
      </div>
      <div class="mb-3">
        <label class="col-form-label" for="type">Frequency:</label>
        <select class="form-select" readonly="readonly">
          <option selected>{}</option>
        </select>
      </div>
      <div class="mb-3">
        <label class="form-label">Amount:</label>
        <input type="text" class="form-control" value="{}" readonly="readonly">
      </div>
    </form>`
  return template.format( title, date, reminder.frequency, reminder.amount)
}

String.prototype.format = function () {
  var i = 0, args = arguments;
  return this.replace(/{}/g, function () {
  return typeof args[i] != 'undefined' ? args[i++] : '';
  });
};

docReady(appCalendarInit);