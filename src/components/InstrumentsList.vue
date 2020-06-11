<template>
<div>
    <ul>
        <li v-for="(instrument) in instruments"  :key="instrument.instrumentId">
            {{instrument.name}}
            <button v-on:click="deleteInstrument(instrument.instrumentId, $event)">delete</button>
        </li>
    </ul>
</div>
</template>

<script>
import instrumentService from '../services/instrument.service'

export default {
    name: 'InstrumentsList',
    data: function () {
        return {
            keyword: "",
            instruments: []
        }
    },
    beforeMount: async function () {
        await this.loadInstruments()
    },
    methods: {
        async loadInstruments () {
            this.instruments = await instrumentService.GetInstruments(this.keyword)
        },
        async deleteInstrument (id) {
            await instrumentService.DeleteInstrument(id)        
            this.loadInstruments(this.keyword)
        }
    }
}

</script>