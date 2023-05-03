import React from 'react';
import { Page, Text, Document, StyleSheet } from '@react-pdf/renderer';


const styles = StyleSheet.create({
    body: {
        paddingTop: 35,
        paddingBottom: 65,
        paddingHorizontal: 35,
    },
    title: {
        fontSize: 24,
        textAlign: "center",
    },
    text: {
        margin: 12,
        fontSize: 12,
        textAlign: "justify",
        fontFamily: "Times-Roman",
    },
    header: {
        fontSize: 16,
        marginBottom: 20,
        textAlign: "center",
        color: "grey",
        textDecoration: "underline"
    },
    pageNumber: {
        position: "absolute",
        fontSize: 12,
        bottom: 30,
        left: 0,
        right: 0,
        textAlign: "center",
        color: "grey",
    },
});


const PdfFile = () => {
    return (
        <Document>
            <Page style={styles.body}>
                <Text style={styles.header} fixed>
                    Blog
                </Text>
                <Text style={styles.text}>
                    Ques-01. Tell us the differences between uncontrolled and controlled components.
                    {"\n"}
                    Ans: In React, controlled components refer to components that have their state and behavior controlled by the parent component. These components rely on props passed down from the parent component to update their state and behavior. Uncontrolled components refer to components that manage their own state internally.
                </Text>
                <Text style={styles.text}>
                    Ques-02. How to validate React props using PropTypes?
                    {'\n'}
                    Ans: PropTypes define the type of a prop. So each time, a value is passed through a prop, it gets validated for it&apos;s type. If you pass a value through a prop with a different data type than it is specified in the PropTypes, an error message will be printed in the console of the browser.
                </Text>
                <Text style={styles.text}>
                    Ques-03. Tell us the difference between nodejs and express js.
                    {'\n'}
                    Ans: NodeJS is the package, which provides the JavaScript run-time environment, whereas Express is a framework that sits on top of NodeJS and helps us to handle requests and responses.
                </Text>
                <Text style={styles.text}>
                    Ques-04. What is a custom hook, and why will you create a custom hook?
                    {'\n'}
                    Ans: Custom React JS hooks offer reusability as when a custom hook is created, it can be reused easily, which makes the code cleaner and reduces the time to write the code.
                </Text>
                <Text
                    style={styles.pageNumber}
                    render={({ pageNumber, totalPages }) =>
                        `${pageNumber} / ${totalPages}`
                    }
                />
            </Page>
        </Document>
    );
};

export default PdfFile;