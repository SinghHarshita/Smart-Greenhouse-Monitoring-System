import React, { Component, Fragment } from "react";
import { injectIntl} from 'react-intl';
import { Colxx, Separator } from "Components/CustomBootstrap";
import BreadcrumbContainer from "Components/BreadcrumbContainer";
import IntlMessages from "Util/IntlMessages";
import {
  Row,
  Card,
  CardBody,
  CardTitle,
  FormGroup,
  Label,
  CustomInput,
  Form
} from "reactstrap";
import Select from "react-select";
import CustomSelectInput from "Components/CustomSelectInput";
import DatePicker from "react-datepicker";
import moment from "moment";
import TagsInput from "react-tagsinput";
import Switch from "rc-switch";
import ReactAutosuggest from "Components/ReactAutosuggest";
import Rating from "Components/Rating";
import { SliderTooltip, RangeTooltip } from "Components/SliderTooltip";
import FineUploaderTraditional from "fine-uploader-wrappers";
import Gallery from "react-fine-uploader";

import "react-tagsinput/react-tagsinput.css";
import "react-datepicker/dist/react-datepicker.css";
import "rc-switch/assets/index.css";
import "rc-slider/assets/index.css";
import "react-rater/lib/react-rater.css";
import "react-fine-uploader/gallery/gallery.css";

const uploader = new FineUploaderTraditional({
  options: {
    chunking: {
      enabled: false
    },
    deleteFile: {
      enabled: true,
      endpoint: "/uploads"
    },
    request: {
      endpoint: "/uploads"
    }
  }
});

const cakeData = [
  {
    name: "Marble Cake"
  },
  {
    name: "Fruitcake"
  },
  {
    name: "Chocolate Cake"
  },
  {
    name: "Fat Rascal"
  },
  {
    name: "Financier"
  },
  {
    name: "Genoise"
  },
  {
    name: "Gingerbread"
  },
  {
    name: "Goose Breast"
  },
  {
    name: "Parkin"
  },
  {
    name: "Petit Gâteau"
  },
  {
    name: "Salzburger Nockerl"
  },
  {
    name: "Soufflé"
  },
  {
    name: "Streuselkuchen"
  },
  {
    name: "Tea Loaf"
  },
  {
    name: "Napoleonshat"
  },
  {
    name: "Merveilleux"
  },
  {
    name: "Magdalena"
  },
  {
    name: "Cremeschnitte"
  },
  {
    name: "Cheesecake"
  },
  {
    name: "Bebinca"
  }
];

const SELECT_DATA = [
  { label: "Chocolate", value: "chocolate", key: 0 },
  { label: "Vanilla", value: "vanilla", key: 1 },
  { label: "Strawberry", value: "strawberry", key: 2 },
  { label: "Caramel", value: "caramel", key: 3 },
  { label: "Cookies and Cream", value: "cookiescream", key: 4 },
  { label: "Peppermint", value: "peppermint", key: 5 }
];

class FormsUi extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleChangeDate = this.handleChangeDate.bind(this);
    this.handleChangeStart = this.handleChangeStart.bind(this);
    this.handleChangeEnd = this.handleChangeEnd.bind(this);
    this.handleChangeEmbedded = this.handleChangeEmbedded.bind(this);
    this.handleChangeDateTime = this.handleChangeDateTime.bind(this);
    this.handleTagChange = this.handleTagChange.bind(this);

    this.state = {
      selectedOptions: [],
      selectedOption: "",
      startDate: null,
      startDateTime: null,
      startDateRange: null,
      endDateRange: null,
      embeddedDate: moment(),
      tags: [],
      switchCheckedPrimary: false,
      switchCheckedPrimaryInverse: true,
      switchCheckedSecondary: true,
      switchCheckedSecondaryInverse: false,
      suggestionValue: "",
      suggestions: []
    };
  }

  onSuggestionChange = (event, { newValue }) => {
    this.setState({
      suggestionValue: newValue
    });
  };

  handleTagChange(tags) {
    this.setState({ tags });
  }

  handleChangeMulti = selectedOptions => {
    this.setState({ selectedOptions });
  };

  handleChange = selectedOption => {
    this.setState({ selectedOption });
  };

  handleChangeEmbedded(date) {
    this.setState({
      embeddedDate: date
    });
  }

  handleChangeDate(date) {
    this.setState({
      startDate: date
    });
  }

  handleChangeDateTime(date) {
    this.setState({
      startDateTime: date
    });
  }

  handleChangeStart(date) {
    this.setState({
      startDateRange: date
    });
  }

  handleChangeEnd(date) {
    this.setState({
      endDateRange: date
    });
  }

  render() {
    const {messages} = this.props.intl;
    return (
      <Fragment>
        <Row>
          <Colxx xxs="12">
            <BreadcrumbContainer
              heading={<IntlMessages id="menu.form-components" />}
              match={this.props.match}
            />
            <Separator className="mb-5" />
          </Colxx>
        </Row>

        <Row className="mb-4">
          <Colxx xxs="12">
            <Card>
              <CardBody>
                <CardTitle>
                  <IntlMessages id="form-components.custom-inputs" />
                </CardTitle>
                <Form>
                  <FormGroup>
                    <Label for="exCustomCheckbox">
                      <IntlMessages id="form-components.checkboxes" />
                    </Label>
                    <div>
                      <CustomInput
                        type="checkbox"
                        id="exCustomCheckbox"
                        label="Check this custom checkbox"
                      />
                      <CustomInput
                        type="checkbox"
                        id="exCustomCheckbox2"
                        label="Or this one"
                      />
                      <CustomInput
                        type="checkbox"
                        id="exCustomCheckbox3"
                        label="But not this disabled one"
                        disabled
                      />
                    </div>
                  </FormGroup>
                  <FormGroup>
                    <Label for="exCustomRadio">
                      <IntlMessages id="form-components.radios" />
                    </Label>
                    <div>
                      <CustomInput
                        type="radio"
                        id="exCustomRadio"
                        name="customRadio"
                        label="Select this custom radio"
                      />
                      <CustomInput
                        type="radio"
                        id="exCustomRadio2"
                        name="customRadio"
                        label="Or this one"
                      />
                      <CustomInput
                        type="radio"
                        id="exCustomRadio3"
                        label="But not this disabled one"
                        disabled
                      />
                    </div>
                  </FormGroup>
                  <FormGroup>
                    <Label for="exCustomInline">
                      <IntlMessages id="form-components.inline" />
                    </Label>
                    <div>
                      <CustomInput
                        type="checkbox"
                        id="exCustomInline"
                        label="An inline custom input"
                        inline
                      />
                      <CustomInput
                        type="checkbox"
                        id="exCustomInline2"
                        label="and another one"
                        inline
                      />
                    </div>
                  </FormGroup>
                </Form>
              </CardBody>
            </Card>
          </Colxx>
        </Row>

        <Row className="mb-4">
          <Colxx xxs="12">
            <Card>
              <CardBody>
                <CardTitle>
                  <IntlMessages id="form-components.react-select" />
                </CardTitle>
                <Row>
                  <Colxx xxs="12" md="6" className="mb-5">
                    <label>
                      <IntlMessages id="form-components.state-single" />
                    </label>
                    <Select
                      components={{ Input: CustomSelectInput }}
                      className="react-select"
                      classNamePrefix="react-select"
                      name="form-field-name"
                      value={this.state.selectedOption}
                      onChange={this.handleChange}
                      options={SELECT_DATA}
                    />
                  </Colxx>
                  <Colxx xxs="12" md="6">
                    <label>
                      <IntlMessages id="form-components.state-multiple" />
                    </label>
                    <Select
                      components={{ Input: CustomSelectInput }}
                      className="react-select"
                      classNamePrefix="react-select"
                      isMulti
                      name="form-field-name"
                      value={this.state.selectedOptions}
                      onChange={this.handleChangeMulti}
                      options={SELECT_DATA}
                    />
                  </Colxx>
                </Row>
              </CardBody>
            </Card>
          </Colxx>
        </Row>

        <Row className="mb-4">
          <Colxx xxs="12">
            <Card>
              <CardBody>
                <CardTitle>
                  <IntlMessages id="form-components.react-autosuggest" />
                </CardTitle>
                <Row className="mb-4">
                  <Colxx xxs="12" sm="6">
                    <ReactAutosuggest
                      placeholder={messages["form-components.type-a-cake"]}
                      data={cakeData}
                      onChange={value => {}}
                    />
                  </Colxx>
                </Row>
              </CardBody>
            </Card>
          </Colxx>
        </Row>

        <Row>
          <Colxx xxs="12" xl="8" className="mb-4">
            <Card>
              <CardBody>
                <CardTitle>
                  <IntlMessages id="form-components.date-picker" />
                </CardTitle>
                <label>
                  <IntlMessages id="form-components.date" />
                </label>
                <div className="mb-5">
                  <DatePicker
                    selected={this.state.startDate}
                    onChange={this.handleChangeDate}
                    placeholderText={messages["forms.date"]}
                  />
                </div>
                <label>
                  <IntlMessages id="form-components.date-range" />
                </label>
                <Row className="mb-5">
                  <Colxx xxs="6">
                    <DatePicker
                      selected={this.state.startDateRange}
                      selectsStart
                      startDate={this.state.startDateRange}
                      endDate={this.state.endDateRange}
                      onChange={this.handleChangeStart}
                      placeholderText={messages["form-components.start"]}
                    />
                  </Colxx>
                  <Colxx xxs="6">
                    <DatePicker
                      selected={this.state.endDateRange}
                      selectsEnd
                      startDate={this.state.startDateRange}
                      endDate={this.state.endDateRange}
                      onChange={this.handleChangeEnd}
                      placeholderText={messages["form-components.end"]}
                    />
                  </Colxx>
                </Row>

                <label>
                  <IntlMessages id="form-components.date-with-time" />
                </label>
                <DatePicker
                  className="mb-5"
                  selected={this.state.startDateTime}
                  onChange={this.handleChangeDateTime}
                  placeholderText={messages["forms.date"]}
                  showTimeSelect
                  timeFormat="HH:mm"
                  timeIntervals={15}
                  dateFormat="LLL"
                  timeCaption="Time"
                />
              </CardBody>
            </Card>
          </Colxx>

          <Colxx xxs="12" xl="4" className="mb-4">
            <Card className="h-100">
              <CardBody>
                <CardTitle>
                  <IntlMessages id="form-components.embedded" />
                </CardTitle>
                <DatePicker
                  calendarClassName="embedded"
                  inline
                  selected={this.state.embeddedDate}
                  onChange={this.handleChangeEmbedded}
                />
              </CardBody>
            </Card>
          </Colxx>
        </Row>

        <Row className="mb-4">
          <Colxx xxs="12">
            <Card>
              <CardBody>
                <CardTitle>
                  <IntlMessages id="form-components.fine-uploader" />
                </CardTitle>
                <Gallery
                  animationsDisabled={true}
                  uploader={uploader}
                  deleteButton-children={<span>Delete</span>}
                  fileInput-children={<span />}
                >
                  <span className="react-fine-uploader-gallery-dropzone-content">
                    <IntlMessages id="form-components.drop-files-here" />
                  </span>
                </Gallery>
              </CardBody>
            </Card>
          </Colxx>
        </Row>

        <Row className="mb-4">
          <Colxx xxs="12">
            <Card>
              <CardBody>
                <CardTitle>
                  <IntlMessages id="form-components.tags" />
                </CardTitle>
                <TagsInput
                  value={this.state.tags}
                  onChange={this.handleTagChange}
                  inputProps={{ placeholder: messages["form-components.tags"] }}
                />
              </CardBody>
            </Card>
          </Colxx>
        </Row>

        <Row className="mb-4">
          <Colxx xxs="12">
            <Card>
              <CardBody>
                <CardTitle>
                  <IntlMessages id="form-components.switch" />
                </CardTitle>
                <Row className="mb-4">
                  <Colxx xxs="6">
                    <label>
                      <IntlMessages id="form-components.primary" />
                    </label>
                    <Switch
                      className="custom-switch custom-switch-primary"
                      checked={this.state.switchCheckedPrimary}
                      onChange={switchCheckedPrimary => {
                        this.setState({ switchCheckedPrimary });
                      }}
                    />
                  </Colxx>

                  <Colxx xxs="6">
                    <label>
                      <IntlMessages id="form-components.secondary" />
                    </label>
                    <Switch
                      className="custom-switch custom-switch-secondary"
                      checked={this.state.switchCheckedSecondary}
                      onChange={switchCheckedSecondary => {
                        this.setState({ switchCheckedSecondary });
                      }}
                    />
                  </Colxx>
                </Row>

                <Row>
                  <Colxx xxs="6">
                    <label>
                      <IntlMessages id="form-components.primary-inverse" />
                    </label>
                    <Switch
                      className="custom-switch custom-switch-primary-inverse"
                      checked={this.state.switchCheckedPrimaryInverse}
                      onChange={switchCheckedPrimaryInverse => {
                        this.setState({ switchCheckedPrimaryInverse });
                      }}
                    />
                  </Colxx>

                  <Colxx xxs="6">
                    <label>
                      <IntlMessages id="form-components.secondary-inverse" />
                    </label>
                    <Switch
                      className="custom-switch custom-switch-secondary-inverse"
                      checked={this.state.switchCheckedSecondaryInverse}
                      onChange={switchCheckedSecondaryInverse => {
                        this.setState({ switchCheckedSecondaryInverse });
                      }}
                    />
                  </Colxx>
                </Row>
              </CardBody>
            </Card>
          </Colxx>
        </Row>

        <Row className="mb-4">
          <Colxx xxs="12">
            <Card>
              <CardBody>
                <CardTitle>
                  <IntlMessages id="form-components.slider" />
                </CardTitle>
                <Row>
                  <Colxx xxs="12" sm="6">
                    <label>
                      <IntlMessages id="form-components.double-slider" />
                    </label>
                    <RangeTooltip
                      min={500}
                      max={1500}
                      className="mb-5"
                      defaultValue={[800, 1200]}
                      allowCross={false}
                      pushable={100}
                    />
                  </Colxx>

                  <Colxx xxs="12" sm="6">
                    <label>
                      <IntlMessages id="form-components.single-slider" />
                    </label>
                    <SliderTooltip
                      min={500}
                      max={1500}
                      defaultValue={1000}
                      className="mb-5"
                    />
                  </Colxx>
                </Row>
              </CardBody>
            </Card>
          </Colxx>
        </Row>

        <Row className="mb-4">
          <Colxx xxs="12">
            <Card>
              <CardBody>
                <CardTitle>
                  <IntlMessages id="form-components.rating" />
                </CardTitle>
                <Row>
                  <Colxx xxs="12" sm="6">
                    <label>
                      <IntlMessages id="form-components.interactive" />
                    </label>
                    <Rating total={5} rating={0} onRate={rating => {}} />
                  </Colxx>
                  <Colxx xxs="12" sm="6">
                    <label>
                      <IntlMessages id="form-components.readonly" />
                    </label>
                    <Rating total={5} rating={5} interactive={false} />
                  </Colxx>
                </Row>
              </CardBody>
            </Card>
          </Colxx>
        </Row>
      </Fragment>
    );
  }
}
export default injectIntl(FormsUi)