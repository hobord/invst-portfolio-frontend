<template>
  <nav class="panel">
    <p class="panel-heading">
      Instuments
    </p>
    <div class="panel-block">
      <div style="width:100%">
        <div class="field is-grouped is-grouped-right">
          <p class="control has-icons-left is-expanded">
            <input :value="keyword" v-debounce:300ms="updateKeyword" type="text" class="input" placeholder="Search"/>
            <span class="icon is-left">
              <i class="fas fa-search" aria-hidden="true"></i>
            </span>
          </p>
          <p class="control">
            <button v-if="!newFormVisible" @click="newFormVisible=true" class="button is-primary">create new</button>
          </p>
        </div>
      </div>
    </div>

    <div class="panel-block" v-if="newFormVisible">
      <div>
        <h3>Create New</h3>
        <div class="field">
          <div class="control">
            <input id="id" type="number" v-model.trim.number="newInstrument.id" placeholder="id" class="input"/>
          </div>
        </div>
        <div class="field">
          <div class="control">
            <input id="name" type="text" v-model.trim="newInstrument.name" placeholder="name" class="input"/>
          </div>
        </div>
        <div class="field">
          <div class="control">
            <input id="symbol" type="text" v-model.trim="newInstrument.symbol" placeholder="symbol" class="input"/>
          </div>
        </div>
        <div class="field">
          <div class="control">
            <input id="type" type="text" v-model.trim="newInstrument.instrumentType" placeholder="type" class="input"/>
          </div>
        </div>
        <div class="field is-grouped is-grouped-centered">
          <div class="control">
            <button @click="createNewInstrument" class="button is-link">create</button>
          </div>
          <div class="control">              
            <button @click="cancelCreate" class="button is-link is-light">cancel</button>
          </div>
        </div>
      </div>
    </div>

    <div class="panel-block">
      <div style="width:100%">
        <div>
          <progress class="progress is-small is-primary" max="100" v-if="isLoading">loading</progress>
        </div>
          <div class="table-container">
          <table class="table  is-bordered is-striped is-narrow is-hoverable is-fullwidth">
            <thead>
              <tr>
                <th>id</th><th>name</th><th>symbol</th><th>type</th><th></th>
              </tr>
            </thead>
            <tbody :class="{'is-loading':isLoading}">
              <tr v-for="(instrument) in instruments" :key="instrument.instrumentId">
                <td>{{instrument.instrumentId}}</td>
                <td>{{instrument.name}}</td>
                <td>{{instrument.symbol}}</td>
                <td>{{instrument.instrumentType}}</td>
                <td>
                  <div class="buttons is-right">
                    <button
                    v-on:click="deleteInstrument(instrument.instrumentId, $event)"
                    class="button is-small is-danger"
                    >
                      <span>Delete</span>
                      <span class="icon is-small">
                        <i class="fas fa-times"></i>
                      </span>
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "InstrumentsList",
  data: function() {
    return {
      newFormVisible: false,
      newInstrument: {
        id: null,
        name:'',
        symbol: '',
        instrumentType: ''
      }
    };
  },
  beforeMount: async function() {
    await this.loadInstruments();
  },
  computed: {
    instruments() {
      return this.$store.getters["instrumentList/getInstruments"];
    },
    keyword() {
      return this.$store.getters["instrumentList/getKeyword"];
    },
    isLoading() {
      return this.$store.getters["instrumentList/isLoading"];
    }
  },
  methods: {
    updateKeyword(keyword) {
      this.$store.dispatch("instrumentList/setKeyword", keyword).then(() => {});
    },
    loadInstruments() {
      this.$store.dispatch("instrumentList/loadInstruments").then(() => {});
    },
    deleteInstrument(id) {
      this.$store
        .dispatch("instrumentList/deleteInstrument", id)
        .then(() => {});
    },
    async createNewInstrument() {
      this.$store
        .dispatch("instrumentList/createInstrument", this.newInstrument)
        .then((result) => {
          if (result) {
            console.log("New instrument created:")
            console.log(result)
            this.cancelCreate()
          }
        });
    },
    cancelCreate() {
      this.newInstrument = {
        id: null,
        name:'',
        symbol: '',
        instrumentType: ''
      };
      this.newFormVisible = false;
    }
  }
};
</script>