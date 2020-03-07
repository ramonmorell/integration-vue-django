<template>
    <div class="input-group">
        <select v-model="$i18n.locale" class="custom-select">
            <option
                v-for="(lang, i) in langs"
                :key="`Lang${i}`"
                :value="lang"
                >{{ $t(`LANGUAGE.${lang}`) }}</option
            >
        </select>
    </div>
</template>

<script>
export default {
    name: 'LocaleChanger',
    data() {
        return { langs: ['es', 'en'] };
    }
};
</script>
