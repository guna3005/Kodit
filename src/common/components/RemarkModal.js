import ReactMarkdown from "react-markdown";
import styled from "styled-components";
import { Modal } from "antd";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";

const RemarkModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  background-color: #252525;
  color: #fff;
`;

const RemarkModalContent = styled.div`
  overflow-y: scroll;
  flex: 1;
  padding: 16px;
`;

const RemarkModalCodeBlock = styled(SyntaxHighlighter)`
  margin: 0 0 16px 0;
  padding: 16px;
`;

const RemarkModal = ({ isOpen, onClose, markdown }) => {
  return (
    <Modal
      title="Blog Post"
      visible={isOpen}
      onCancel={onClose}
      footer={null}
      width={800}
    >
      <RemarkModalContainer>
        <RemarkModalContent>
          <ReactMarkdown
            components={{
              code({ node, inline, className, children, ...props }) {
                const match = /language-(\w+)/.exec(className || "");
                return !inline && match ? (
                  <RemarkModalCodeBlock
                    style={dracula}
                    language={match[1]}
                    PreTag="div"
                    children={String(children).replace(/\n$/, "")}
                    {...props}
                  />
                ) : (
                  <code className={className} {...props}>
                    {children}
                  </code>
                );
              },
            }}
          >
            {markdown}
          </ReactMarkdown>
        </RemarkModalContent>
      </RemarkModalContainer>
    </Modal>
  );
};

export default RemarkModal;
