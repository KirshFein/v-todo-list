<template>
  <section class="d-flex flex-column">
    <div
      v-for="(todo, index) in todos"
      :id="todo.id"
      :key="todo.id"
      class="card"
      style="margin-bottom: 3%"
    >
      <div class="d-flex align-items-center">
        <input
          v-if="todo.done"
          type="checkbox"
          class="ml-3 checkbox"
          name="todo"
          checked
        >
        <input
          v-else
          type="checkbox"
          class="ml-3 checkbox"
          name="todo"
        >
        <h3
          v-if="!editing[index]"
          class="ml-2 p-3"
        >
          {{ todo.name }}
        </h3>
        <input
          v-else
          type="text"
          class="col form-control ml-2"
        >
      </div>
      <button
        class="remove"
        @click="deleteTodo(todo.id)"
      >
        Remove task
      </button>
      <button
        class="btn-warning"
        @click="updateTodo(index)"
      >
        {{ editing[index] ? 'Update todo' : 'Changed todo' }}
      </button>
    </div>
  </section>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  name: 'ToDo',
  props: {
    todos:{}
  },
  data: () => {
    return {
      editing: this.todos.map(() => false),
    }
  },
  watch: {
    todos(val) {
      this.editing = val.map(() => false);
    },
  },
  methods: {
    ...mapActions(['deleteTodo']),
    updateTodo(i){
      this.editing = this.todos.map(() => false);
      this.editing[i] = !this.editing[i]
      console.log(this.editing)
    }
  },
};
</script>

<style scoped>
.checkbox {
  transform: scale(1.6);
  opacity: 0.9;
}
label {
  margin: 0;
  font-size: 23px;
}

.remove {
  color: #fff;
  border: 0;
  outline: 0;
  cursor: pointer;
  background: #32c950;
  font-size: 30px;
}

.remove:hover {
  background: #2aa056;
}

.remove:active {
  background: #000;
}

.btn-warning {
  color: #000;
  border: 0;
  outline: 0;
  cursor: pointer;
  font-size: 30px;
}

.btn-warning:hover {
  background-color: #ba8d07;
}

.btn-warning:active {
  background-color: #000;
  color: #fff;
}
</style>
