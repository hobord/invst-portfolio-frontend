<template>
<div>
    <ul>
        <li v-for="(index, instrument) in instruments"  :key="instrument.instrumentId">
            -{{instrument.name}}-
        </li>
    </ul>
</div>
</template>

<script>
import { GetInstruments } from '../services/instrument'

export default {
    name: 'InstrumentsList',
    data: function () {
        return {
            instruments: []
        }
    },
    created: async function () {
        this.instruments = await GetInstruments("")
    },
    methods: {
        loadInstruments: async function () {
            this.instruments = await GetInstruments("")
        }
    }
}

</script>