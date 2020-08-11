import React from "react";

import "./styles.css";
import PageHeader from "../../../components/PageHeader";
import TeacherItem from "../../../components/teacherItem";
import Input from "../../../components/input";

function TeacherList() {
  return (
    <div id="page-teacher-list" className="container">
      <PageHeader title="Estes são os proffys disponiveis.">

          <form id="search-teachers">
           
              <Input name="subject" label="Materia"></Input>
              <Input name="week_day" label="Dia da semana"></Input>
              <Input type="time" name="time" label="Hora"></Input>

          </form>
      </PageHeader>

      <main>
      <TeacherItem/>
      <TeacherItem/>
      <TeacherItem/>
      <TeacherItem/>
      <TeacherItem/>

      </main>
    </div>
  );
}

export default TeacherList;
