beforeEach(function(){
    //! setting up data retrieval from example.json fixture
    cy.fixture('example').then(function(data)
    {
        globalThis.data = data
    })
})