<template>
  <form class="form">
    <v-container>
      <v-row>
        <v-col>
          <h2>Личные данные</h2>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" md="4">
          <v-text-field
            label="Фамилия"
            v-model="surname"
            :error-messages="errors.surname"
            outlined
          />
        </v-col>
        <v-col cols="12" md="4">
          <v-text-field
            label="Имя"
            v-model="name"
            :error-messages="errors.name"
            outlined
          />
        </v-col>
        <v-col cols="12" md="4">
          <v-text-field
            label="Отчество"
            v-model="patronymic"
            :error-messages="errors.patronymic"
            outlined
          />
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" md="4">
          <v-text-field
            label="Дата рождения"
            v-model="birthdate"
            type="date"
            :error-messages="errors.birthdate"
            outlined
          />
        </v-col>
        <v-col cols="12" md="8">
          <v-text-field
            label="E-mail"
            v-model="email"
            type="email"
            :error-messages="errors.email"
            outlined
          />
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <h3>Пол</h3>
          <v-radio-group v-model="gender" :column="false">
            <v-radio
              class="mr-5"
              v-for="item in genderOptions"
              :key="item.id"
              :label="item.name"
              :value="item.value"
            />
          </v-radio-group>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <h2>Паспортные данные</h2>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" md="8">
          <v-select
            label="Гражданство"
            v-model="citizenship"
            :items="citizenshipOptions"
            item-text="nationality"
            item-value="id"
            v-click-outside="resetSearch"
            :error-messages="errors.citizenship"
            no-data-text="Ничего не найдено"
            outlined
          >
            <template v-slot:prepend-item>
              <v-text-field
                class="search pa-2"
                background-color="#eee"
                placeholder="Поиск"
                v-model="citizenshipSearch"
                autofocus
                :solo="true"
                :hide-details="true"
              >
              </v-text-field>
            </template>
          </v-select>
        </v-col>
      </v-row>
      <v-row v-if="citizenshipIsRussia">
        <v-col cols="12" md="4">
          <v-text-field
            label="Серия паспорта"
            v-model="passportSeries"
            :error-messages="errors.passportSeries"
            outlined
          />
        </v-col>
        <v-col cols="12" md="4">
          <v-text-field
            label="Номер паспорта"
            v-model="passportNumber"
            :error-messages="errors.passportNumber"
            outlined
          />
        </v-col>
        <v-col cols="12" md="4">
          <v-text-field
            label="Дата выдачи"
            v-model="passportDate"
            type="date"
            :error-messages="errors.passportDate"
            outlined
          />
        </v-col>
      </v-row>
      <template v-else-if="citizenship">
        <v-row>
          <v-col cols="12" md="6">
            <v-text-field
              label="Фамилия на латинице"
              v-model="surnameLatin"
              outlined
              :error-messages="errors.surnameLatin"
              messages="Заполнять латинскими буквами. Например, Petrov"
            />
          </v-col>
          <v-col cols="12" md="6">
            <v-text-field
              label="Имя на латинице"
              v-model="nameLatin"
              outlined
              :error-messages="errors.nameLatin"
              messages="Заполнять латинскими буквами. Например, Sergey"
            />
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" md="4">
            <v-text-field
              label="Номер паспорта"
              v-model="passportNumberInternational"
              :error-messages="errors.passportNumberInternational"
              outlined
            />
          </v-col>
          <v-col cols="12" md="4">
            <v-select
              label="Страна выдачи"
              v-model="passportCountry"
              :items="citizenshipOptions"
              item-text="nationality"
              item-value="id"
              :error-messages="errors.passportCountry"
              outlined
            />
          </v-col>
          <v-col cols="12" md="4">
            <v-select
              label="Тип паспорта"
              v-model="passportType"
              :items="passportTypesOptions"
              item-text="type"
              item-value="id"
              :error-messages="errors.passportType"
              outlined
            />
          </v-col>
        </v-row>
      </template>
      <v-row>
        <v-col>
          <h3>Меняли ли фамилию или имя?</h3>
          <v-radio-group v-model="hasChangeName" :column="false">
            <v-radio
              class="mr-5"
              v-for="item in [
                { name: 'Нет', value: false },
                { name: 'Да', value: true },
              ]"
              :key="item.name"
              :label="item.name"
              :value="item.value"
            />
          </v-radio-group>
        </v-col>
      </v-row>
      <v-row v-if="hasChangeName">
        <v-col cols="12" md="4">
          <v-text-field
            label="Предыдущая Фамилия"
            v-model="surnameOld"
            :error-messages="errors.surnameOld"
            outlined
          />
        </v-col>
        <v-col cols="12" md="4">
          <v-text-field
            label="Предыдущее Имя"
            v-model="nameOld"
            :error-messages="errors.nameOld"
            outlined
          />
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-btn @click="submit">Отправить</v-btn>
        </v-col>
      </v-row>
    </v-container>
  </form>
</template>

<script>
import { validationMixin } from "vuelidate";

import { fetchCitizenships, fetchPassportTypes } from "../services";
import { validators, schema } from "../utils/validate";
import { debounce } from "../utils/debounce";

const RUSSIAN_CITIZENSHIP_ID = 8604;
const GENDER_OPTIONS = [
  { id: 1, name: "Мужской", value: "male" },
  { id: 2, name: "Женский", value: "female" },
];

const {
  required,
  alpha,
  alphaRus,
  numeric,
  email,
  dateIsNotInFuture,
  passportSeriesLength,
  passportNumberLength,
} = validators;

export default {
  mixins: [validationMixin],
  validations() {
    const schema = {
      surname: { required, alphaRus },
      surnameOld: {},
      surnameLatin: {},
      name: { required, alphaRus },
      nameOld: {},
      nameLatin: {},
      patronymic: { required, alphaRus },
      email: { required, email },
      birthdate: { required, dateIsNotInFuture },
      citizenship: { required },
      passportSeries: {},
      passportNumber: {},
      passportNumberInternational: {},
      passportDate: {},
      passportCountry: {},
      passportType: {},
    };

    if (this.hasChangeName) {
      schema.surnameOld = { required, alphaRus };
      schema.nameOld = { required, alphaRus };
    }

    if (this.citizenshipIsRussia) {
      schema.passportSeries = { required, numeric, passportSeriesLength };
      schema.passportNumber = { required, numeric, passportNumberLength };
      schema.passportDate = { required, dateIsNotInFuture };
    } else {
      schema.surnameLatin = { required, alpha };
      schema.nameLatin = { required, alpha };
      schema.passportNumberInternational = { required };
      schema.passportCountry = { required };
      schema.passportType = { required };
    }

    return schema;
  },

  data: () => ({
    surname: "",
    surnameOld: "",
    surnameLatin: "",
    name: "",
    nameOld: "",
    nameLatin: "",
    patronymic: "",
    email: "",
    birthdate: "",
    gender: "male",
    passportSeries: "",
    passportNumber: "",
    passportNumberInternational: "",
    passportDate: "",
    passportType: "",
    passportCountry: "",
    citizenship: "",
    hasChangeName: false,
    citizenshipSearch: "",
    citizenshipOptions: [],
    passportTypesOptions: [],
  }),
  async mounted() {
    const [citizenshipOptions, passportTypesOptions] = await Promise.all([
      fetchCitizenships(),
      fetchPassportTypes(),
    ]);
    this.citizenshipOptions = citizenshipOptions;
    this.passportTypesOptions = passportTypesOptions;
  },
  created() {
    this.genderOptions = GENDER_OPTIONS;
    this.debouncedGetCitizenships = debounce(this.getCitizenships, 500);
  },
  computed: {
    citizenshipIsRussia() {
      return this.citizenship === RUSSIAN_CITIZENSHIP_ID;
    },
    errors() {
      return {
        surname: schema.validateSurname(this.$v.surname),
        surnameOld: schema.validateSurnameOld(this.$v.surnameOld),
        surnameLatin: schema.validateSurnameLatin(this.$v.surnameLatin),
        name: schema.validateName(this.$v.name),
        nameOld: schema.validateNameOld(this.$v.nameOld),
        nameLatin: schema.validateNameLatin(this.$v.nameLatin),
        patronymic: schema.validatePatronymic(this.$v.patronymic),
        email: schema.validateEmail(this.$v.email),
        birthdate: schema.validateBirthdate(this.$v.birthdate),
        citizenship: schema.validateCitizenship(this.$v.citizenship),
        passportSeries: schema.validatePassportSeries(this.$v.passportSeries),
        passportNumber: schema.validatePassportNumber(this.$v.passportNumber),
        passportDate: schema.validatePassportDate(this.$v.passportDate),
        passportType: schema.validatePassportType(this.$v.passportType),
        passportNumberInternational: schema.validatePassportNumberInternational(
          this.$v.passportNumberInternational
        ),
        passportCountry: schema.validatePassportCountry(
          this.$v.passportCountry
        ),
      };
    },
  },
  watch: {
    citizenshipSearch(newTerm) {
      this.debouncedGetCitizenships(newTerm);
    },
  },
  methods: {
    async getCitizenships(query) {
      const citizenshipOptions = await fetchCitizenships({ query });
      this.citizenshipOptions = citizenshipOptions;
    },
    resetSearch() {
      if (this.citizenshipSearch) {
        this.citizenshipSearch = "";
      }
    },
    getFormValues() {
      const values = {
        surname: this.surname,
        name: this.name,
        patronymic: this.patronymic,
        email: this.email,
        gender: this.gender,
        birthdate: this.birthdate,
        citizenship: this.citizenship,
        hasChangeName: this.hasChangeName,
      };

      if (this.hasChangeName) {
        values.surnameOld = this.surnameOld;
        values.nameOld = this.nameOld;
      }

      if (this.citizenshipIsRussia) {
        values.passportSeries = this.passportSeries;
        values.passportNumber = this.passportNumber;
        values.passportDate = this.passportDate;
      } else {
        values.surnameLatin = this.surnameLatin;
        values.nameLatin = this.nameLatin;
        values.passportNumberInternational = this.passportNumberInternational;
        values.passportCountry = this.passportCountry;
        values.passportType = this.passportType;
      }

      return values;
    },
    submit() {
      this.$v.$touch();

      if (this.$v.$invalid) {
        this.$notify({
          group: "foo",
          type: "error",
          title: "Форма не может быть отправлена",
          text: "Пожалуйста, исправьте ошибки при заполнении формы",
          duration: 7000,
        });
        return;
      }

      const values = this.getFormValues();

      this.$notify({
        group: "foo",
        type: "success",
        title: "Форма успешно отправлена",
        text: "Данные можно посмотреть в консоли разработчика",
        duration: 7000,
      });

      console.log(values);
    },
  },
};
</script>

<style>
.form {
  max-width: 1024px;
  margin: 0 auto;
  padding: 30px;
  border: 1px solid #1976d2;
  border-radius: 10px;
}

.search {
  position: sticky;
  top: 0;
  left: 0;
  background-color: #fff;
  z-index: 1;
}
</style>
