import React from 'react';
import PageHeader from '../../../components/PageHeader';

import './styles.css';
import Input from '../../../components/input';
import warninggIcon from '../../../assets/images/icons/warning.svg'
import Textarea from '../../../components/Textarea';
import Select from '../../../components/Select';

function TeacherForm(){
    return(
        <div id="page-teacher-form" className="container">
            <PageHeader
            title="Que incrivel que você quer dar aulas."
            description="O primeiro passo é preencher esse formulário de incrição"
            />

            <main>
                <fieldset>
                    <legend>Seus dados</legend>

                    <Input name="name" label="Nome completo" />
                    <Input name="avatar" label="Avatar" />
                    <Input name="whatsapp" label="whatsapp" />
                    <Textarea name="bio" label="Biografia" />
                </fieldset>

                <fieldset>
                    <legend>Sobre á aula</legend>

                    <Select 
                    name="subject" 
                    label="Materia" 
                    option={[
                        { value: 'Artes', label:'Artes'},
                        { value: 'matematica', label:'Matematica'},
                        { value: 'Portugues', label:'Portugues'},
                        { value: 'Ciências', label:'Ciências'},
                        { value: 'Geografia', label:'Geagrafia'},
                        { value: 'Fisica', label:'Fisica'},
                        { value: 'Historia', label:'Historia'},
                    ]}/>
                    <Input name="cost" label="Custo de sua hora por aula" />
                   

                </fieldset>

               

                <footer>
                    <p>
                        <img src={warninggIcon} alt="Aviso importante"/>
                        Importante! <br />
                        Prencha todos os dados
                    </p>
                    <button type="button">Salvar cadastro</button>
                </footer>
            </main>


             </div>
    );
}

export default TeacherForm;