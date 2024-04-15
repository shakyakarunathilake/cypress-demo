describe("cypress demo", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
    cy.viewport("iphone-5");
  });

  it("renders the title: ", () => {
    cy.get('[data-testid="title"]')
      .should("exist")
      .should("have.text", "Cypress Demo");
  });

  it("renders the to dos: ", () => {
    cy.fixture("example.json").then((data) => {
      data.todo.map(
        (todo: {
          id: number;
          title: string;
          completed: boolean;
          note: string;
        }) => {
          cy.get(`[data-testid="span-${todo.id}"]`)
            .should("exist")
            .should("have.text", todo.title);
          if (todo.completed) {
            cy.get(`[data-testid="checkbox-${todo.id}"]`)
              .should("exist")
              .should("be.checked");
            cy.get(`[data-testid="note-${todo.id}"]`).should("exist");
            cy.get(`[data-testid="note-text-field-${todo.id}"]`)
              .should("exist")
              .should("have.value", todo.note);
          } else {
            cy.get(`[data-testid="checkbox-${todo.id}"]`)
              .should("exist")
              .should("not.be.checked");
            cy.get(`[data-testid="note-${todo.id}"]`).should("not.exist");
          }
        }
      );
    });
  });

  it("updating a todo: ", () => {
    cy.fixture("example.json").then((data) => {
      data.todo.map(
        (todo: {
          id: number;
          title: string;
          completed: boolean;
          note: string;
        }) => {
          cy.get(`[data-testid="checkbox-${todo.id}"]`).should("exist").click();
          if (todo.completed) {
            cy.get(`[data-testid="note-${todo.id}"]`).should("not.exist");
          } else {
            cy.get(`[data-testid="note-${todo.id}"]`).should("exist");
            cy.get(`[data-testid="note-text-field-${todo.id}"]`)
              .should("exist")
              .type("Took about 1 hour");
          }
        }
      );
    });
  });
});
