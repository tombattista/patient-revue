/* SearchBox component script */
import { defineComponent, ref } from 'vue';

export default defineComponent({
  props: ['label', 'searchAllLabel', 'value', 'allowEmptyValue', 'hasError', 'message'],
  data() {
    // Data fields
    const searchValue = ref<string>(this.value);
    const searchSubmitted = ref<boolean>(false);
    const searchAllowEmptyValue = ref<boolean>(this.allowEmptyValue);
    const searchHasError = ref<boolean>(this.hasError);
    const searchMessage = ref<string>(this.message);

    // Public handler for form submission
    const submitForm = () => {
      searchSubmitted.value =
        (searchValue.value && searchValue.value.trim() !== "" && !searchAllowEmptyValue.value)
        || searchAllowEmptyValue.value;

      if (searchSubmitted.value) {
        this.emitValueUpdated();
      }
    }

    const loadAll = () => {
      searchValue.value = '';
      this.emitValueUpdated();
    }

    return {
      searchValue,
      searchSubmitted,
      searchAllowEmptyValue,
      searchHasError,
      searchMessage,
      submitForm,
      loadAll
    };
  },
  watch: {},
  methods: {
    emitValueUpdated() {
      this.$emit('onValueUpdated', this.searchValue);
    }
  }
});
