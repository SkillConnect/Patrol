
var infoData = {
    Expense: "This alert will inform you of all the recent transactions that have transaction type as 'Expense'. The goal of this alert is to let you know of recent transactions with money going out of your accounts. This alert will typically go out early morning on days when there are new transactions detected.",
    Income: "This alert will inform you of all the recent transactions that have transaction type as 'Income'. The goal of this alert is to let you know of recent transactions with money coming in to your accounts. This alert will typically go out early morning on days when there are new transactions detected.",
    CreditCardPayment: "This alert will notify you of the recent Credit Card Payments detected for our accounts. The goal of this alert is to let you know of recent credit card payments. This alert will typically go out on days when there are new credit card payments detected.",
    RecurringMerchant: "This alert will notify you of any merchant that appears to have a recurring monthly payment. The goal of this alert is to inform you of the various monthly recurring payments that you have. This alert will typically go out 2 days prior to the recurring payment hitting your accounts.",
    RepeatMerchant: "This alert will notify you of any merchant that appears to have had multiple transactions in your recent transaction history. The goal of this alert is to inform you of any merchant that may have charged you multiple times in your recent 15 day transaction history",
    CreditUsageWeekly: "This alert will inform you about your credit usage so that you are aware of how much credit you are utilizing. The goal of this alert is to inform you of your credit usage so that you can stay below 30% credit usage and thus have a positive impact on your Credit Score. This alert will typically go out when your credit usage goes above 30%.",
    UtilityReminder: "This alert will inform you about your upcoming Utility bills. The goal of this alert is to inform you of any utility bills that are soon due so that you do not miss any payments. This alert will typically go out 2 days prior to your bill due date.",
    CustomReminder: "This alert will inform you about your upcoming custom reminder that you may have created. The goal of this alert is to inform you of any custom reminders that you may have set up from the Bills section so that you don't miss paying that particular bill. This alert will typically go out on the date that you have requested the reminder for.",
    UnrefreshedAccount: "This alert will inform you about any financial account that you have connected with MoneyPatrol but for some reason that account has not been successfully refreshed in the last 7 days. The goal of this alert is to inform you of any account that is failing to successfully refresh due to which recent transactions are not getting pulled into MoneyPatrol.",
    BudgetUsage70: "This alert will inform you about the usage of your various Budgets. The goal of this alert is to help you stay within your Budgets. This alert will typically go out when a specific Budget category has met or exceeded certain thresholds.",
    BudgetUsage90: "This alert will inform you about the usage of your various Budgets. The goal of this alert is to help you stay within your Budgets. This alert will typically go out when a specific Budget category has met or exceeded certain thresholds.",
    BudgetUsage100: "This alert will inform you about the usage of your various Budgets. The goal of this alert is to help you stay within your Budgets. This alert will typically go out when a specific Budget category has met or exceeded certain thresholds.",
    LowBal100: "This alert will inform you when any Checking account is running low in Balance amount. The goal of this alert is to inform you when your Checking Accounts may be going below certain thresholds so that you can ensure that you don't get charged with Overdraft or other types of fees.",
    LowBal50: "This alert will inform you when any Checking account is running low in Balance amount. The goal of this alert is to inform you when your Checking Accounts may be going below certain thresholds so that you can ensure that you don't get charged with Overdraft or other types of fees.",
    LowBal0: "This alert will inform you when any Checking account is running low in Balance amount. The goal of this alert is to inform you when your Checking Accounts may be going below certain thresholds so that you can ensure that you don't get charged with Overdraft or other types of fees.",
    HighCreditUsage: "This alert will inform you if your credit usage goes above 90% credit utilization rate so that you don't exceed your credit limit. The goal of this alert is to inform you when you are using more than 90% of your credit card loan amount. If you exceed your credit usage, most likely, you will get hit by extra fees by your credit card provider along with a negative comment on your Credit Report which will impact your Credit Report negatively.",
    TransferReceived: "This alert will inform you of any transaction which is transferring money into any one of your connected accounts. The goal of this alert is to inform you of any money transfers hitting your accounts.", 
    TransferMade: "This alert will inform you of any transaction which is transferring money out of any one of your connected accounts. The goal of this alert is to inform you of any money transfers hitting your accounts.",
    WeeklySummary: "This alert will share the weekly summary of the transactions from the most recent week. The goal of this alert is to give you a quick summary view of the key highlights of your finances from the preceding week. This alert will typically go out on Monday evening with data summary of preceding week.",
    MonthlySummary: "This alert will share the monthly summary of the transactions from the most recent month. The goal of this alert is to give you a quick summary view of the key highlights of your finances from the preceding month. This alert will typically go out on the 3rd of every month with data summary of preceding month."
}

var alertConfigs = {
    Expense: 'Expense Alert (Daily)',
    Income: 'Income Alert (Daily)',
    CreditCardPayment: 'Credit Card Payment',
    RecurringMerchant: 'Recurring Merchant',
    RepeatMerchant: 'Repeat Merchant',
    CreditUsageWeekly: 'Credit Usage (Weekly)',
    UtilityReminder: 'Utility Reminder',
    CustomReminder: 'Custom Reminder',
    UnrefreshedAccount: 'Unrefreshed Account',
    BudgetUsage70: 'Budget Usage > 70%',
    BudgetUsage90: 'Budget Usage > 90%',
    BudgetUsage100: 'Budget Usage > 100%',
    LowBal100: 'Low Bal < $100',
    LowBal50: 'Low Bal < $50',
    LowBal0: 'Low Bal < $0',
    HighCreditUsage: 'High Credit Usage',
    TransferReceived: 'Transfer Received',
    TransferMade: 'Transfer Made',
    WeeklySummary: 'Weekly Summary',
    MonthlySummary: 'Monthly Summary',
}

var rowTemplate = `
<div class="row">
    <div class="col-lg-3 fw-bold mb-2">{} <i class="fas fa-info-circle" onclick="showInfoModal('{}')"></i></div>
    <div class="col-lg-2 col-4"><div class="form-check"><input class="form-check-input" type="checkbox" /><label class="form-check-label">Text</label></div></div>
    <div class="col-lg-2 col-4"><div class="form-check"><input class="form-check-input" type="checkbox" /><label class="form-check-label">Email</label></div></div>
    <div class="col-lg-2 col-4"><button class="btn btn-primary btn-sm">Save</button></div>
    <div class="col-lg-3"><a href="#" data-bs-toggle="modal" data-bs-target="#expense-threshold-modal">Set Threshold Limit</a></div>
</div>
<hr>
`

function repeatRows() {
    rows = ''
    Object.keys(alertConfigs).forEach(id => {
        rows += rowTemplate.format(alertConfigs[id], id)
    });
    document.getElementById('configure-alerts').innerHTML = rows
}


function showInfoModal(infoName) {
    document.getElementById('info-modal-body').innerHTML = infoData[infoName] || ""
    var infoModal = new bootstrap.Modal(document.getElementById('info-modal'))
    infoModal.show()
}

String.prototype.format = function () {
    var i = 0, args = arguments;
    return this.replace(/{}/g, function () {
    return typeof args[i] != 'undefined' ? args[i++] : '';
    });
}

docReady(repeatRows);

function switchTab() {
    const triggerElementId = window.location.hash
    let tabTriggerEl = document.querySelector(triggerElementId)
    if (!tabTriggerEl) { tabTriggerEl = document.querySelector('#pill-billing-tab') }
    const tab = new bootstrap.Tab(tabTriggerEl)
    tab.show()
}

switchTab()