import React, { useState } from "react";
import { Form } from "semantic-ui-react";

function PokemonForm({ pokemon, setPokemon, url }) {


  const formData = {
    "name": "",
    "hp": 0,
    "frontUrl": "",
    "backUrl": ""
  }

  const [form, setForm] = useState(formData)

  function submitHandler(e) {
    e.preventDefault()

    const newPokemon = {
      "name": form.name,
      "hp": form.hp,
      "sprites": {
        "front": form.frontUrl,
        "back": form.backUrl
      }
    }

    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPokemon),
    }
    ).then(res => res.json())
      .then(data => {
        setPokemon([
          ...pokemon,
          data
        ])
        setForm(formData)
      })

  }

  function formChangeHandler(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }




  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form
        onSubmit={submitHandler}
      >
        <Form.Group widths="equal">
          <Form.Input onChange={formChangeHandler} value={form.name} fluid label="Name" placeholder="Name" name="name" />
          <Form.Input onChange={formChangeHandler} value={form.hp} fluid label="hp" placeholder="hp" name="hp" />
          <Form.Input
            onChange={formChangeHandler}
            value={form.frontUrl}
            fluid
            label="Front Image URL"
            placeholder="url"
            name="frontUrl"
          />
          <Form.Input
            onChange={formChangeHandler}
            value={form.backUrl}
            fluid
            label="Back Image URL"
            placeholder="url"
            name="backUrl"
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;
