import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../../../Redux/store";
import {
  deleteLegalInsight,
  fetchLegalInsights,
  updateLegalInsight,
  createLegalInsight,
} from "../../../Redux/Admin/legalInsightsSlice";
import { Modal, Button, Form } from "react-bootstrap";
import { FaEdit, FaTrash, FaEye } from "react-icons/fa";
import styles from "./LegalInsights.module.css";
import Loader from "../../../Components/Loader/Loader";

export const formatDescription = (text: string) => {
  return text
    ?.split(/(\*\*.*?\*\*)/)
    ?.map((part, index) =>
      part?.startsWith("**") && part?.endsWith("**") ? (
        <strong key={index}>{part?.slice(2, -2)}</strong>
      ) : (
        part
      )
    );
};
const LegalInsightsComponent: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const { insights, status, error } = useSelector(
    (state: RootState) => state.legalInsights
  );

  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showViewModal, setShowViewModal] = useState(false);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [selectedInsight, setSelectedInsight] = useState<any>(null);
  const [editing, setEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState("");
  const [editedDescription, setEditedDescription] = useState("");
  const [editedImage, setEditedImage] = useState<File | null>(null);
  const [editedImagePreview, setEditedImagePreview] = useState<string | null>(
    null
  );
  const [newTitle, setNewTitle] = useState("");
  const [newDescription, setNewDescription] = useState("");
  const [newImage, setNewImage] = useState<File | null>(null);
  const [newImagePreview, setNewImagePreview] = useState<string | null>(null);
  const [loading, setLoading] = useState(false); // State for loading
  const [deleteLoading, setDeleteLoading] = useState(false); // State for delete loading
  const [updateLoading, setUpdateLoading] = useState(false); // State for update loading
  const [showErr, setShowErr] = useState("");

  const fetch = () => {
    dispatch(fetchLegalInsights())
      .then((response) => {
        console.log("Legal insights fetched successfully:", response);
      })
      .catch((err) => {
        console.error("Failed to fetch legal insights:", err);
      });
  };

  useEffect(() => {
    dispatch(fetchLegalInsights())
      .then((response) => {
        console.log("Legal insights fetched successfully:", response);
      })
      .catch((err) => {
        console.error("Failed to fetch legal insights:", err);
      });
  }, [dispatch]);

  const handleDelete = (insight: any) => {
    setSelectedInsight(insight);
    setShowDeleteModal(true);
  };

  const confirmDelete = () => {
    if (selectedInsight) {
      setDeleteLoading(true); // Show loader
      dispatch(deleteLegalInsight(selectedInsight._id))
        .then(() => {
          setShowDeleteModal(false); // Hide modal on success
          setDeleteLoading(false); // Hide loader
        })
        .catch((error) => {
          console.error("Failed to delete legal insight:", error);
          setDeleteLoading(false); // Hide loader on error
        });
    }
  };

  const handleEdit = (insight: any) => {
    setEditing(true);
    setSelectedInsight(insight);
    setEditedTitle(insight.title);
    setEditedDescription(insight.description);
    setEditedImage(null);
    setEditedImagePreview(insight.image);
  };

  const handleSave = () => {
    if (selectedInsight) {
      setUpdateLoading(true); // Show loader
      const formData = new FormData();
      formData.append("title", editedTitle);
      formData.append("description", editedDescription);
      if (editedImage) formData.append("image", editedImage);

      const imageFile = formData.get("image");
      dispatch(
        updateLegalInsight({
          _id: selectedInsight._id,
          title: editedTitle,
          description: editedDescription,
          image: imageFile instanceof File ? imageFile : undefined, // Ensure imageFile is of type File
        })
      )
        .then((response) => {
          if (
            response.payload.message === "News insight updated successfully."
          ) {
            console.log(response, "resposuccessfullysuccessfullynse");
            fetch();
            setEditing(false);
            setUpdateLoading(false); // Hide loader
          }
        })
        .catch((error) => {
          console.error("Failed to update legal insight:", error);
          setUpdateLoading(false); // Hide loader on error
        });
    }
  };

  const handleImageChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    isNew = false
  ) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const imageURL = reader.result as string;
        if (isNew) {
          setNewImage(file);
          setNewImagePreview(imageURL);
        } else {
          setEditedImage(file);
          setEditedImagePreview(imageURL);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleView = (insight: any) => {
    setSelectedInsight(insight);
    setShowViewModal(true);
  };

  const handleCreate = () => {
    setShowErr("");
    if (newTitle && newDescription && newImage) {
      setShowErr("");
      setLoading(true); // Show loader
      dispatch(
        createLegalInsight({
          title: newTitle,
          description: newDescription,
          image: newImage,
        })
      )
        .then(() => {
          setShowCreateModal(false);
          setNewTitle("");
          setNewDescription("");
          setNewImage(null);
          setNewImagePreview(null); // Reset preview URL
          setLoading(false); // Hide loader
        })
        .catch((error) => {
          console.error("Failed to create legal insight:", error);
          setLoading(false); // Hide loader on error
        });
    } else {
      setShowErr("Please fill all fields and select an image.");
      console.error("Please fill all fields and select an image.");
    }
  };

  if (status === "loading")
    return (
      <div
        style={{
          height: "100vh",
          width: "100vw",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Loader />
      </div>
    );
  if (status === "failed") return <div>Error: {error}</div>;

  return (
    <div
      style={{
        //backgroundColor: `var(--primary-color-faded-bg)`,
        margin: `-88px 0px`,
        padding: `88px 16px`,
        backgroundColor: "#f4f4f4",
      }}
    >
      <div style={{ textAlign: "center", marginBottom: 20 }}>
        <h2 style={{ textAlign: "center", marginTop: 90, fontWeight: 900 }}>
          What’s New
        </h2>
        <p style={{ marginBottom: 12, fontSize: 16 }}>
          Use the button below to create and publish a new blog post for the
          "What’s New" section.
        </p>
        <Button
          variant="primary"
          onClick={() => setShowCreateModal(true)}
          style={{ padding: "14px 24px", fontSize: 16 }}
        >
          Create What’s New Blog Post
        </Button>
      </div>

      <div className={styles.container}>
        {Array?.isArray(insights) && insights.length > 0 ? (
          insights
            ?.slice()
            ?.reverse()
            ?.map((insight) => (
              <div
                key={insight._id}
                className={styles.item}
                style={{
                  backgroundColor: `#fff`,
                  border: "none",
                  borderRadius: 32,
                }}
              >
                <img
                  src={insight.image}
                  alt={insight.title}
                  //className={styles.image}
                  style={{
                    maxHeight: 300,
                    minHeight: 300,
                    objectFit: "cover",
                    borderRadius: 24,
                  }}
                />

                <div className={styles.title}>{insight.title}</div>
                <div className={styles.description}>
                  {formatDescription(insight.description.substring(0, 180))}
                  {formatDescription(
                    insight.description.length > 180 ? "..." : ""
                  )}
                </div>
                <div className={styles.icons}>
                  <div className={styles.iconsdiv}>
                    <FaEye
                      className={`${styles.icon} ${styles.viewbutton}`}
                      onClick={() => handleView(insight)}
                    />
                  </div>
                  <div className={styles.iconsdiv}>
                    <FaEdit
                      className={`${styles.icon} ${styles.editicon}`}
                      onClick={() => handleEdit(insight)}
                    />
                  </div>
                  <div className={styles.iconsdivdelete}>
                    <FaTrash
                      className={`${styles.icon} ${styles.deleteicon}`}
                      onClick={() => handleDelete(insight)}
                    />
                  </div>
                </div>
              </div>
            ))
        ) : (
          <div>No insights available</div>
        )}

        {/* Delete Confirmation Modal */}
        <Modal show={showDeleteModal} onHide={() => setShowDeleteModal(false)}>
          <Modal.Header closeButton>
            <Modal.Title>Confirm Delete</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {deleteLoading ? (
              <Loader /> // Show loader
            ) : (
              <>
                <p>
                  Are you sure you want to delete the What's New Post titled:
                </p>
                <h5>{selectedInsight?.title}</h5>
              </>
            )}
          </Modal.Body>
          <Modal.Footer>
            <Button
              variant="secondary"
              onClick={() => setShowDeleteModal(false)}
              disabled={deleteLoading} // Disable button while loading
              style={{
                padding: "14px 24px",
                fontSize: 16,
                width: "100%",
              }}
            >
              Cancel
            </Button>
            <Button
              style={{
                padding: "14px 24px",
                fontSize: 16,
                width: "100%",
              }}
              variant="primary"
              onClick={confirmDelete}
              disabled={deleteLoading} // Disable button while loading
            >
              Delete
            </Button>
          </Modal.Footer>
        </Modal>

        {/* View Insight Modal */}
        <Modal
          show={showViewModal}
          onHide={() => setShowViewModal(false)}
          dialogClassName={styles.viewModal}
        >
          <Modal.Header closeButton>
            <Modal.Title>{selectedInsight?.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <img
              src={selectedInsight?.image}
              alt={selectedInsight?.title}
              style={{ width: "100%", marginBottom: 24 }}
            />
            <br />
            <div className={styles.viewcontent}>
              {formatDescription(selectedInsight?.description)}
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setShowViewModal(false)}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>

        {/* Create Insight Modal */}
        <Modal
          show={showCreateModal}
          onHide={() => setShowCreateModal(false)}
          centered
          backdropClassName="custom-modal-backdrop"
        >
          <Modal.Header closeButton>
            <Modal.Title
              style={{ fontWeight: 800, fontFamily: `var(--primary-font)` }}
            >
              Create What's New Post
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {loading ? (
              <Loader />
            ) : (
              <Form>
                <Form.Group controlId="formTitle">
                  <Form.Label>Post Title</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter title"
                    value={newTitle}
                    onChange={(e) => setNewTitle(e.target.value)}
                    style={{
                      backgroundColor: "#f4f4f4",
                    }}
                  />
                </Form.Group>
                <br />
                <Form.Group controlId="formDescription">
                  <Form.Label>Post Description</Form.Label>
                  <Form.Control
                    style={{
                      backgroundColor: "#f4f4f4",
                    }}
                    as="textarea"
                    rows={12}
                    placeholder="Enter post content"
                    value={newDescription}
                    onChange={(e) => setNewDescription(e.target.value)}
                  />
                </Form.Group>
                <br />
                <Form.Group controlId="formImage">
                  <Form.Label>Cover Image</Form.Label>
                  <Form.Control
                    style={{
                      backgroundColor: "#f4f4f4",
                    }}
                    type="file"
                    accept="image/*"
                    onChange={(e) => handleImageChange(e as any, true)}
                  />
                  {newImagePreview && (
                    <img
                      src={newImagePreview}
                      alt="Preview"
                      style={{ width: "100%", marginBottom: 24 }}
                    />
                  )}
                </Form.Group>
              </Form>
            )}
          </Modal.Body>
          <Modal.Footer>
            <div
              style={{
                justifyContent: "center",
                alignItems: "center",
                display: "flex",
                flexDirection: "column",
                width: "100%",
              }}
            >
              <p style={{ color: "#ff0000", fontSize: 14 }}>
                {showErr === "" ? "" : showErr}
              </p>
              <div
                style={{
                  gap: 12,
                  justifyContent: "center",
                  alignItems: "center",
                  display: "flex",
                  flexDirection: "column-reverse",
                  width: "100%",
                }}
              >
                <Button
                  variant="secondary"
                  onClick={() => setShowCreateModal(false)}
                  disabled={loading}
                  style={{
                    padding: "14px 24px",
                    fontSize: 16,
                    width: "100%",
                  }}
                >
                  Close
                </Button>
                <Button
                  variant="primary"
                  onClick={handleCreate}
                  disabled={loading}
                  style={{
                    padding: "14px 24px",
                    fontSize: 16,
                    width: "100%",
                  }}
                >
                  Create
                </Button>
              </div>
            </div>
          </Modal.Footer>
        </Modal>

        {/* Edit Insight Modal */}
        <Modal show={editing} onHide={() => setEditing(false)}>
          <Modal.Header closeButton>
            <Modal.Title>Edit a What's New Post</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {updateLoading ? (
              <Loader /> // Show loader
            ) : (
              <Form>
                <Form.Group controlId="formTitle">
                  <Form.Label>Title</Form.Label>
                  <Form.Control
                    style={{
                      backgroundColor: "#f4f4f4",
                    }}
                    type="text"
                    placeholder="Enter title"
                    value={editedTitle}
                    onChange={(e) => setEditedTitle(e.target.value)}
                  />
                </Form.Group>
                <br />
                <Form.Group controlId="formDescription">
                  <Form.Label>Description</Form.Label>
                  <Form.Control
                    style={{
                      backgroundColor: "#f4f4f4",
                    }}
                    as="textarea"
                    rows={12}
                    placeholder="Enter description"
                    value={editedDescription}
                    onChange={(e) => setEditedDescription(e.target.value)}
                  />
                  <br />
                </Form.Group>
                <Form.Group controlId="formImage">
                  <Form.Label>Image</Form.Label>
                  <Form.Control
                    style={{
                      backgroundColor: "#f4f4f4",
                    }}
                    type="file"
                    accept="image/*"
                    onChange={(e) => handleImageChange(e as any)}
                  />
                  {editedImagePreview && (
                    <div onClick={(e) => handleImageChange(e as any)}>
                      <img
                        src={editedImagePreview}
                        alt="Preview"
                        className={styles.imagePreview}
                      />
                    </div>
                  )}
                </Form.Group>
              </Form>
            )}
          </Modal.Body>
          <Modal.Footer>
            <Button
              style={{
                padding: "14px 24px",
                fontSize: 16,
                width: "100%",
              }}
              variant="secondary"
              onClick={() => setEditing(false)}
              disabled={updateLoading} // Disable button while loading
            >
              Close
            </Button>
            <Button
              variant="primary"
              onClick={handleSave}
              disabled={updateLoading} // Disable button while loading
              style={{
                padding: "14px 24px",
                fontSize: 16,
                width: "100%",
              }}
            >
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
      <div style={{ marginTop: 120 }}></div>
    </div>
  );
};

export default LegalInsightsComponent;
