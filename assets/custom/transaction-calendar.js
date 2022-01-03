var events = [{
  start: "2022-02-20",
  title: "Income",
  transactions: [{
    institution: "Discover Card (All Account Types) : DMC - (xxxx9324)",
    account: "CREDIT",
    merchant: "Mowry Pharma",
    category: "Pharmacy",
    amount: "$50"
  },{
    institution: "Discover Card (All Account Types) : DMC - (xxxx9324)",
    account: "CREDIT",
    merchant: "Mowry Pharma",
    category: "Pharmacy",
    amount: "$50"
  }],
  total: "$100",
  className: 'bg-soft-primary'
},{
  start: "2022-02-04",
  title: "Expense",
  transactions: [{
    institution: "Discover Card (All Account Types) : DMC - (xxxx9324)",
    account: "CREDIT",
    merchant: "Mowry Pharma",
    category: "Pharmacy",
    amount: "$50"
  },{
    institution: "Discover Card (All Account Types) : DMC - (xxxx9324)",
    account: "CREDIT",
    merchant: "Mowry Pharma",
    category: "Pharmacy",
    amount: "$50"
  }],
  total: "$100",
  className: 'bg-soft-warning'
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
      <div> <h5 class="modal-title mb-0"> ${event.extendedProps.total} ${event.title} on ${event.start.toDateString()} </h5> </div>
    </div>
    <div class="modal-body">
      <div class="table-responsive">
        <table class="table table-bordered table-hover">
          <thead class="table-light">
            <tr>
              <th scope="col">Date</th>
              <th scope="col">Merchant</th>
              <th scope="col">Category</th>
              <th scope="col">Institution</th>
              <th scope="col">Amount</th>
            </tr>
          </thead>
          <tbody>
            ${getModalTableBody(event.start, event.extendedProps.transactions)}
          </tbody>
        </table>
      </div>
      <div class="float-end">
        <button class="btn btn-outline-dark" disabled="disabled">Transactions: ${event.extendedProps.transactions.length}</button>
        <button class="btn btn-outline-dark" disabled="disabled">Total: ${event.extendedProps.total}</button>
      </div>
    </div>
    <div class="modal-footer">
      <button class="btn btn-secondary" type="button" data-bs-dismiss="modal">Close</button>
    </div>`
}

function getModalTableBody(date, transactions) {
  const template = '<tr><td>{}</td><td>{}</td><td>{}</td><td>{}</td><td>{}</td></tr>'
  var data = ''
  transactions.forEach(t => {
    data += template.format(date, t.merchant, t.category, t.institution, t.amount)
  })
  return data
}

String.prototype.format = function () {
  var i = 0, args = arguments;
  return this.replace(/{}/g, function () {
  return typeof args[i] != 'undefined' ? args[i++] : '';
  });
};

docReady(appCalendarInit);