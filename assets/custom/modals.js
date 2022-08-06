function createCommonModal(title, tableHeader, tableBody) {
  const theader = tableHeader || `
    <thead class="bg-200 text-900">
      <tr>
        <th>Date</th><th>Merchants</th><th>Category</th><th>Institution</th><th>Total Amount</th>
      </tr>
    </thead>`
  const tbody = tableBody || `
    <tbody>
      <tr>
        <td>20-01-2022</td><td>Anna</td><td>Food</td><td>Abc</td><td>18</td>
      </tr>
      <tr>
        <td>20-01-2022</td><td>Anna</td><td>Food</td><td>Abc</td><td>18</td>
      </tr>
      <tr>
        <td>20-01-2022</td><td>Anna</td><td>Food</td><td>Abc</td><td>18</td>
      </tr>  
      <tr>
        <td>20-01-2022</td><td>Anna</td><td>Food</td><td>Abc</td><td>18</td>
      </tr>
      <tr>
        <td>20-01-2022</td><td>Anna</td><td>Food</td><td>Abc</td><td>18</td>
      </tr>
      <tr>
        <td>20-01-2022</td><td>Anna</td><td>Food</td><td>Abc</td><td>18</td>
      </tr>            
    </tbody>`

  const options = `
    <div class="text-end mb-3">
      <i class="far fa-2x fa-file-excel me-2" style="color: green;"></i>
      <i class="fas fa-2x fa-print" style="color: red;"></i>
    </div>`

  const body = `
    <div class="p-3 border card mb-4">
      <h5 class="text-center mb-3">${title}</h5>

      <!-- Options -->
      ${options}
      <!-- Options End -->

      <!-- Table -->
      <div class="table-responsive scrollbar">
        <table class="table table-bordered table-striped fs--1 mb-0">
          ${theader}
          ${tbody}
        </table>
      </div>
      <!-- Table Ends -->
    </div>`

  document.querySelector('#commonModal .modal-title').innerHTML = title || "Default Title"
  document.querySelector('#commonModal .modal-body').innerHTML = body

  const modal = new bootstrap.Modal(document.getElementById('commonModal'))
  modal.show()
}

function insightsMerchants(params) {
  // Load data from API
  // Generate Tables body and header
  createCommonModal(params.name)
}

function trendsDailySpendModal(params) {
  // Load data from API
  // Generate Tables body and header
  createCommonModal(params.name)
}

function trendsMonthlyModal(params) {
  // Load data from API
  // Generate Tables body and header
  createCommonModal(params.name)
}

function budgets(params) {
  // Load data from API
  // Generate Tables body and header
  const title = `Total ${params.value} Spent out of $815 budget in 0 transactions for ${params.name}`
  createCommonModal(title)
}
